import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import PopUp from 'src/containers/popup';
import Button from 'src/components/Header/Button';
import './style.scss';

const NewsModal = ({
  news,
}) => {
  const [popUp, setPopUp] = useState(false);
  const changePopup = () => {
    setPopUp(!popUp);
  };

  const [modalState, setModalState] = useState(false);
  const manageState = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <section>
        <div className="product-card">
          <div className="badge">News  </div>

          <div className="product-tumb">
            <img src={news.picture_url} alt="news" onClick={() => manageState(!modalState)} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{news.activity_name}</span>
            <h4 className="product-title">{news.article_title}</h4>
            <p>{news.description}</p>
            <div className="product-bottom-details">
              <div className="product-price">{news.price} €</div>
              <div className="product-links">
                <NavLink to={`/commercant/profil/${news.user_id}`}>
                  <Button>Voir le profil du commerçant</Button>
                </NavLink>
                { parseInt(localStorage.getItem('id'), 10) === news.user_id
                  && (
                    <>
                      <MdDeleteForever onClick={() => {
                        changePopup(); console.log(popUp);
                      }}
                      />
                      {popUp === true
                      && <PopUp news={news} changePopup={changePopup} />}
                    </>

                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`modalBackground modalShowing-${modalState} product-modal`}>
          <div className="container-modal">
            <div className="badge-modal">News</div>
            <div className="product-tumb-modal">
              <img src={news.picture_url} alt="news-modal" className="modal-picture" />
            </div>
            <div className="product-details-modal">
              <span className="product-catagory-modal">{news.activity_name}</span>
              <h4 className="product-title-modal">{news.article_title}</h4>
              <p>{news.description}</p>
              <div className="product-bottom-details-modal">
                <div className="product-price-modal">{news.price} €</div>
                <div className="product-links-modal">
                  <NavLink to={`/commercant/profil/${news.user_id}`}>
                    <Button>Voir le profil du commerçant</Button>
                  </NavLink>
                  <button type="button" className="button" onClick={() => manageState(!modalState)}>
                    Fermer  la fenêtre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

NewsModal.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture_url: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    activity_name: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default NewsModal;