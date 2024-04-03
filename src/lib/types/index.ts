export interface IAccordionGroup {
  groupTitle: string;
  subgroups: IAccordionSubgroup[];
}

export interface IAccordionSubgroup {
  subgroupTitle: string;
  lines: string[];
}
