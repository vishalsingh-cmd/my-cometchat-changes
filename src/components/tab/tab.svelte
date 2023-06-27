<script lang="ts">
  import { TabWrapper, TabHead, TabHeadItem, TabContentItem } from './';
  let activeTabValue = 0;

  const handleClick = (tabValue: number) => () => {
    activeTabValue = tabValue;
  };

  export let options: {
    head: {
      id: number;
      label: string;
    };
    content: any;
  }[];
</script>

<TabWrapper>
  <TabHead>
    {#each options as tab}
      <TabHeadItem
        id={tab.head.id}
        on:click={handleClick(tab.head.id)}
        isActive={activeTabValue == tab.head.id}>{tab.head.label}</TabHeadItem
      >
    {/each}
  </TabHead>
  {#each options as tab}
    <TabContentItem id={tab.head.id} {activeTabValue}>{tab.content}</TabContentItem>
  {/each}
</TabWrapper>
