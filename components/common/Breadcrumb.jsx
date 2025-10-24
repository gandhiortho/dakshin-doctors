import Link from "next/link";
import { Fragment } from "react";

const Breadcrumb = ({ title, style = 1, breadcrumbs }) => {
  const getBackgroundImage = () => {
    switch (style) {
      case 1:
        return "/assets/images/header/04_header.webp";
      case 2:
        return "/assets/images/header/05_header.webp";
      case 3:
        return "/assets/images/header/06_header.webp";
      default:
        return "";
    }
  };

  return (
    <div
      className="breadcrumb-header"
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner">
              <h1>{title}</h1>
              <ul>
                {breadcrumbs.map((breadcrumb, index) => (
                  <Fragment key={index}>
                    <li>
                      {breadcrumb.href ? (
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                      ) : (
                        breadcrumb.label
                      )}
                    </li>
                    {index < breadcrumbs.length - 1 && (
                      <li>
                        <i className="fas fa-angle-right"></i>
                      </li>
                    )}
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
