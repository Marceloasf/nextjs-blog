type Page = {
  id: string;
  title: string;
};

type Props = {
  page?: Page;
};

function Page({ page }: Props) {
  return page?.id ? <div>{`${page.id} - ${page.title}`}</div> : <></>;
}

// This gets called on every request (is only executed on requests)
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  const data = await {
    id: "1",
    title: "Page Test",
  };

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
