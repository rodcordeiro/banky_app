import { SelectOption } from '../components/tools/form/components/select';

/**
 * Receives an array of data and transform it to the form select type
 *
 * @param {array} data  Array of data
 * @param {object} options  Label and value key to format array
 * @returns {array} Array of options for select
 */
export function prepareOptions<T = any>(
  data: T[],
  options?: {
    label: keyof T;
    value: keyof T;
  },
): Array<SelectOption> {
  return data.map(
    (item) =>
      ({
        label: options ? item[options.label] : item,
        value: options ? item[options.value] : item,
      }) as SelectOption,
  );
}
