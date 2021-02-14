import React from "react"
import Data from "../Data.json"
import { Link } from "react-router-dom"
import "./NewsScreen.css"

export function NewsScreen({ match }) {
  //    const yangiliklar = Data.products
  //    const matchID=parseInt(match.params.id)
  //    const name = yangiliklar.find(count=>count._id===matchID).name
  const yangiliklar = Data.products.find((p) => p._id == match.params.id)
  return (
    <div className="news-screen-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 my-4">
            <div className="card">
              <div className="card-header">
                <h5>Menu</h5>
              </div>
              <ul className="card--body">
                <li>
                  <Link className="nav-link" to="/">
                    Texnikum
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/tuzilma">
                    Tuzilma
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/faoliyat">
                    Faoliyat
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/talabalar">
                    Talabalar uchun
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/yangiliklar">
                    Yangiliklar
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/aloqa">
                    Aloqa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card">
              <div className="card-header">
                <h5>Tezkor havolalar</h5>
              </div>
              <ul className="card--body">
                <li className="mt-3 nav-item">
                  <i className="fas fa-graduation-cap "></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Fakultetlar
                  </Link>
                </li>
                <li className='nav-item'>
                  <i className="fas fa-place-of-worship"></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Kafedralar
                  </Link>
                </li>
                <li className="nav-item">
                  <i className="fas fa-user-graduate"></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Markaz va bo'limlar
                  </Link>
                </li>
                <li className='nav-item'>
                  <i className="fas fa-user-graduate"></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Talabalar uchun
                  </Link>
                </li>
                <li className='nav-item'>
                  <i className="fas fa-graduation-cap "></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Tanlovlar
                  </Link>
                </li>
                <li className='nav-item'>
                  <i className='far fa-newspaper'></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Me'yoriy hujjatlar
                  </Link>
                </li>
                <li className='nav-item'>
                  <i className="fas fa-graduation-cap "></i>
                  <Link
                    className="nav-link"
                    style={{ marginTop: "-39px", marginLeft: "20px" }}
                  >
                    Tadqiqotchiga
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12 my-3">
            <div className="news-details-wrapper">
              <div className="news-name-wrapper">
                <h2>{yangiliklar.name}</h2>
              </div>
              <div className="news-link-wrapper">
                <Link>Asosiy</Link>
                <i
                  className="fas fa-arrow-right"
                  style={{ margin: "0 5px", color: "blue" }}
                ></i>
                <Link>Yangiliklar</Link>
                <i
                  className="fas fa-arrow-right"
                  style={{ margin: "0 5px", color: "blue" }}
                ></i>
                <span className="text-capitalize">{yangiliklar.name}</span>
              </div>
              <div className="news-image-wrapper my-5">
                <img src={yangiliklar.image} alt={yangiliklar.title} />
              </div>
              <div className="news-info-wrapper">
                <p>{yangiliklar.info}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
