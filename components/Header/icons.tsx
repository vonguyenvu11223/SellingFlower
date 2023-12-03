interface Props {
  href: string;
  icons: any;
}

const Icons = ({ href, icons }: Props) => {
  return (
    <div>
      <a href={href} rel="noopener noreferrer" target="_blank">
        {icons}
      </a>
    </div>
  );
};

export default Icons;
