<script lang="ts">
  import Footer from '$components/footer.svelte';
  import '../app.css';

  let columns = [
    {
      title: 'Platform',
      groups: [
        {
          title: 'Features',
          links: [
            {
              label: 'Chat & Messaging',
              href: '/chat-messaging'
            },
            {
              label: 'Voice & Video Calls',
              href: '/voice-video'
            },
            {
              label: 'Security & Compliance',
              href: '/security'
            },
            {
              label: 'Extensions',
              href: '/extensions'
            }
          ]
        },
        {
          title: 'Implementations',
          links: [
            {
              label: 'Widgets',
              href: '/widgets'
            },
            {
              label: 'UI Kits',
              href: '/ui-kits'
            }
          ]
        }
      ]
    },
    {
      title: 'Solutions',
      groups: [
        {
          title: 'Features',
          links: [
            {
              label: 'Chat & Messaging',
              href: '/chat-messaging'
            },
            {
              label: 'Voice & Video Calls',
              href: '/voice-video'
            },
            {
              label: 'Security & Compliance',
              href: '/security'
            },
            {
              label: 'Extensions',
              href: '/extensions'
            }
          ]
        },
        {
          title: 'Implementations',
          links: [
            {
              label: 'Widgets',
              href: '/widgets'
            },
            {
              label: 'UI Kits',
              href: '/ui-kits'
            }
          ]
        }
      ]
    },
    {
      title: 'Developers',
      groups: [
        {
          title: 'Features',
          links: [
            {
              label: 'Chat & Messaging',
              href: '/chat-messaging'
            },
            {
              label: 'Voice & Video Calls',
              href: '/voice-video'
            },
            {
              label: 'Security & Compliance',
              href: '/security'
            },
            {
              label: 'Extensions',
              href: '/extensions'
            }
          ]
        },
        {
          title: 'Implementations',
          links: [
            {
              label: 'Widgets',
              href: '/widgets'
            },
            {
              label: 'UI Kits',
              href: '/ui-kits'
            }
          ]
        }
      ]
    }
  ];
  let subfooter = [
    { label: '2023 © CometChat', href: '/bla' },
    { label: 'Terms of Use', href: '/bla' },
    { label: 'Privacy Policy', href: '/bla' }
  ];
  let socials = [
    { label: 'Instagram', href: '/instagram', icon: 'instagram' },
    { label: 'Facebook', href: '/facebook', icon: 'facebook' },
    { label: 'Twitter', href: '/twitter', icon: 'twitter' },
    { label: 'Twitter', href: '/twitter', icon: 'twitter' },
    { label: 'Twitter', href: '/twitter', icon: 'twitter' }
  ];
</script>

<slot />

<Footer {columns} {subfooter} {socials} />
