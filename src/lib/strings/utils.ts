import { dev } from '$app/environment';

const PATTERN = /\{\{(.*?)\}\}/gim;

export const getMessage = (messages: Record<string, string>, id: string): string => {
  if (!messages[id]) {
    if (dev) {
      console.error(`Translation '${id}' not found.`);
    }

    messages[id] = id;
  }

  return messages[id];
};

export const getMatches = (message: string): RegExpMatchArray | null => {
  return message.match(PATTERN);
};

export const parseMatchesForKey = <T extends Record<string, unknown> = Record<string, string>>(
  matches: RegExpMatchArray,
  key: string,
  values: T
): T => {
  for (const match of matches) {
    const matchName = match.replace(/\{\{|\}\}/gim, '');
    if (!values[matchName]) {
      if (dev) {
        console.error(`Missing value: \`${matchName}\` for translation key: \`${key}\``);
      }

      return { ...values, [matchName]: matchName };
    }
  }

  return values;
};

export const getParts = (message: string): string[] => {
  return message.split(PATTERN);
};

export const isNumber = (inputString: string): boolean => {
  // Use a regular expression to check if the string contains a number
  return /\d/.test(inputString);
};

// i have string for mau that can be a 500, 5000, 10000, 50000, 100000. now write a function that can convert it to 500, 5k, 10k, 50k, 100k
export const convertToKandM = (value: number): string => {
  if (value >= 1000) {
    return `${value / 1000}K`;
  } else if (value >= 1000000) {
    return `${value / 1000000}M`;
  }

  return value.toString();
};

// i have string for mau that can be a 500, 5000, 10000, 50000, 100000. now write a function that can convert it to 500, 5k, 10k, 50k, 100k , 1M , 10M , 100M , 1B
export const convertToKandMandB = (value: number): string => {
  if (value >= 1000000000) {
    return `${value / 1000000000}B`;
  } else if (value >= 1000000) {
    return `${value / 1000000}M`;
  } else if (value >= 1000) {
    return `${value / 1000}K`;
  }

  return value.toString();
};

// i have string we need to validate whether the string contains only numbers or not
export const isStringContainOnlyNumbers = (inputString: string): boolean => {
  return /^\d+$/.test(inputString);
};
