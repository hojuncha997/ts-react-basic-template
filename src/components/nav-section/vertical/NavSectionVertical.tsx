type NavSectionVerticalProps = {
  data: any;
};

export default function NavSectionVertical({
  data,
  ...other
}: NavSectionVerticalProps) {
  return (
    <>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <div key={key} {...other}>
            {group.subheader && <div>{group.subheader}</div>}
            {group.items.map((list) => {
              return <></>;
            })}
          </div>
        );
      })}
    </>
  );
}
