interface PageHeaderProps {
  title: string;
  withRepeatIcons?: boolean;
  withMargin?: boolean;
}

export const PageHeader = ({
  title,
  withRepeatIcons = true,
  withMargin = true,
}: PageHeaderProps) => {
  return (
    <div
      data-with-margin={withMargin}
      data-repeat-icons={withRepeatIcons}
      className="page-header-background"
    >
      <div className="wrapper">
        <h1 className="page-header-title">{title}</h1>
      </div>
    </div>
  );
};
