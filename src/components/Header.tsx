import { Children, FC, ReactNode } from "react";
type HeaderProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};
const Header = ({ image, children }: HeaderProps) => {
  Swal.fire({
    title: "<strong>HTML <u>example</u></strong>",
    icon: "info",
    html: `
      You can use <b>bold text</b>,
      <a href="#" autofocus>links</a>,
      and other HTML tags
    `,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Great!
    `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
      <i class="fa fa-thumbs-down"></i>
    `,
    cancelButtonAriaLabel: "Thumbs down",
  });
  Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
  return (
    <div>
      <img className="w-80 h-80" src={image.src} alt={image.alt} />
      {children}
    </div>
  );
};

export default Header;
