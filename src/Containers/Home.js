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
  // function to get all posts from database
  const getAllPosts = async () => {
    try {
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
    } catch (error) {
      console.log(error.message);
    }
  };
  const handlePageClick = (event) => {
    console.log(event.selected);
    const selectedPage = event.selected;
    // console.log(selectedPage);

    setOffset(selectedPage * postsPerPage);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await getAllPosts();
      setIsLoading(false);
    }
    fetchData();
  }, [offset, filters]);

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
