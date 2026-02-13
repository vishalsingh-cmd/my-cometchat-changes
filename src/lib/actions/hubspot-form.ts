import type { ActionReturn } from 'svelte/action';

function loadHubSpotForm() {
  return new Promise((resolve, reject) => {
    if (window.hbspt) {
      return resolve(true);
    }

    const script = document.createElement('script');
    // script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

export const hubspotForm = (
  node: HTMLElement,
  {
    region = 'na1',
    portalId = '8969037',
    formId
  }: { region?: string; portalId?: string; formId: string }
): ActionReturn<
  unknown,
  { 'on:complete': (e: CustomEvent) => void; 'on:submitSuccess'?: (e: CustomEvent) => void }
> => {
  const init = async () => {
    node.ariaBusy = 'true';
    loadHubSpotForm()
      .then(() => {
        window?.hbspt?.forms?.create({
          region,
          portalId,
          formId,
          target: `#hubspot-form`,
          onFormSubmitted: function (e: Record<string, unknown>) {
            node.dispatchEvent(new CustomEvent('submitSuccess', e));
          }
        });
      })
      .finally(() => {
        node.ariaBusy = 'false';
        node.dispatchEvent(new CustomEvent('complete'));
      });
  };

  init();

  return {};
};
