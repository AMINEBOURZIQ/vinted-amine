import torn from "../images/tear.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import OfferMini from "../Components/OfferMini";

const Home = ({ filters }) => {
  const [postsPerPage] = useState(4);
  const [offset, setOffset] = useState(0);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  //function that returns html code to show

  // function to get all posts from database

  const handlePageClick = (event) => {
    console.log(event.selected);
    const selectedPage = event.selected;
    // console.log(selectedPage);

    setOffset(selectedPage * postsPerPage);
  };
  const getPostData = (offers) => {
    return (
      <div className="offers">
        {offers.map((offer, index) => {
          // console.log(offer._id);
          return <OfferMini key={offer._id} offer={offer}></OfferMini>;
        })}
      </div>
    );
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setIsLoading(true);
        const res1 = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?${filters.sort}&${filters.title}`
        );
        const numberOfPages = Math.ceil(res1.data.count / postsPerPage);
        setPageCount(numberOfPages);
        // console.log(res1.data.offers);
        // console.log(offset);
        // console.log(offset + postsPerPage);
        const res = res1.data.offers.slice(offset, offset + postsPerPage);
        // console.log(res);
        const data = res;
        const postData = getPostData(data);

        // Using Hooks to set value
        setAllPosts(postData);
        // setPageCount(Math.ceil(data.length / postsPerPage));
        // setIsLoading(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllPosts();
  }, [filters, offset, postsPerPage]);

  return (
    <div>
      {/* ici banner */}
      <div className="banner">
        <img src={torn} alt="" />
        <div className="message">
          <h1>Prêts à faire du tri dans vos placards ? ?</h1>
          <button className="sell">Vends maintenant</button>
          <div>
            <Link to="/">Découvrir comment ça marche</Link>
          </div>
        </div>
      </div>
      {isLoading ? (
        <span className="offermini">Loading Data..</span>
      ) : (
        <div>{posts}</div>
      )}
      <ReactPaginate
        previousLabel={"Précédent"}
        nextLabel={"Suivant"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Home;
