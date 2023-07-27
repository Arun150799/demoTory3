import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import hamburger from "../assets/hamBurger.png";
import pImg from "../assets/imgL.png"
import axios from 'axios';
import eye from "../assets/passwordEye.png";
import closebutton from "../assets/closeButton.png";
import bookmarks from "../assets/bookmarks.png";
import left from "../assets/leftArrow.png";
import right from "../assets/rightArrow.png"
import share from "../assets/shareLogo.png"
import bookmark00 from "../assets/books.png";
import whiteLike from "../assets/whiteLike.png";
import bookBlue from "../assets/blueBookmark.png";
import redLike from "../assets/redHeart.png";

import "./ProductList.css";


const ProductList = () => {
  const [logoutIsOpne, setLogoutIsOpen] = useState(false);
  const [SignUpIsOpen, setSignUpIsOpen] = useState(false)
  const [LoginIsOpen, setLoginIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [name1, setName1] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [addStoryIsOpen, setAddStoryIsOpen] = useState(false);
  const [addStoryIsOpen1, setAddStoryIsOpen1] = useState(false);

  const [formCount, setFormCount] = useState(1);
  const [activeSlider, setActiveSlider] = useState(null);
  const [heading, setHeading] = useState("")
  const [description, setDescription] = useState("")
  const [storyLogoURL, setStoryLogoURL] = useState("")
  const [categary, setCategary] = useState("")

  const [slideData, setSlideData] = useState([]); // State to hold slide data
  const totalSlides = slideData.length;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);

  // const [selectedImage1, setSelectedImage1] = useState(null);
  // const [selectedImage2, setSelectedImage2] = useState(null);
  // const [selectedImage3, setSelectedImage3] = useState(null);
  // const [selectedImage4, setSelectedImage4] = useState(null);

  const [jobList, setJobList] = useState([]);

  const [jobList1, setJobList1] = useState([]);
  const [jobList2, setJobList2] = useState([]);
  const [jobList3, setJobList3] = useState([]);
  const [jobList4, setJobList4] = useState([]);
  const [jobList5, setJobList5] = useState([]);

  const [isHambargerOpen, setIsHambargerOpen] = useState(false);
  const [resLoginOpen, setResLoginOpen] = useState(false);
  const [resRegOpen, setResRegOpen] = useState(false);



  const [editStoryIsOpen, setEditStoryIsOpen] = useState(false)
  const [editStoryIsOpen1, setEditStoryIsOpen1] = useState(false)


  const [productId, setProductId] = useState(""); // Add productId state
  const [filters, setFilters] = useState({
    categary: '',
  });

  const [filters1, setFilters1] = useState({
    categary: '',
  });

  const [expanded0, setExpanded0] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const [isViewStory, setIsViewStory] = useState(false);
  const [isViewStory1, setIsViewStory1] = useState(false);
  const [isViewStory2, setIsViewStory2] = useState(false);
  const [isViewStory3, setIsViewStory3] = useState(false);
  const [isViewStory4, setIsViewStory4] = useState(false);
  const [isViewStory5, setIsViewStory5] = useState(false);
  const [isViewStory6, setIsViewStory6] = useState(false);



  const [visibleItems00, setVisibleItems00] = useState(() => {
    const storedItems = localStorage.getItem('visibleItems00');
    if (storedItems) {
      return JSON.parse(storedItems);
    } else {
      // Define your initialItems or an empty array if not available
      const initialItems = [];
      return initialItems;
    }
  });


  const [visibleItems11, setVisibleItems11] = useState([]);
  const [visibleItems22, setVisibleItems22] = useState([]);
  const [visibleItems33, setVisibleItems33] = useState([]);
  const [visibleItems44, setVisibleItems44] = useState([]);
  const [visibleItems55, setVisibleItems55] = useState([]);
  const [visibleItems66, setVisibleItems66] = useState([]);




  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [selectedItemIndex1, setSelectedItemIndex1] = useState(0);
  const [selectedItemIndex2, setSelectedItemIndex2] = useState(0);
  const [selectedItemIndex3, setSelectedItemIndex3] = useState(0);
  const [selectedItemIndex4, setSelectedItemIndex4] = useState(0);
  const [selectedItemIndex5, setSelectedItemIndex5] = useState(0);
  const [selectedItemIndex6, setSelectedItemIndex6] = useState(0);





  const [isShare, setIsShare] = useState(false);
  const [isShare1, setIsShare1] = useState(false);
  const [isShare2, setIsShare2] = useState(false);
  const [isShare3, setIsShare3] = useState(false);
  const [isShare4, setIsShare4] = useState(false);
  const [isShare5, setIsShare5] = useState(false);
  const [isShare6, setIsShare6] = useState(false);



  const [bookmarkStatus, setBookmarkStatus] = useState([]);
  const [bookmarkStatus1, setBookmarkStatus1] = useState([]);
  const [bookmarkStatus2, setBookmarkStatus2] = useState([]);
  const [bookmarkStatus3, setBookmarkStatus3] = useState([]);
  const [bookmarkStatus4, setBookmarkStatus4] = useState([]);
  const [bookmarkStatus5, setBookmarkStatus5] = useState([]);
  const [bookmarkStatus6, setBookmarkStatus6] = useState([]);




  const [isOpenBookmakr, setIsOpenBookmark] = useState(false);
  const [isOpenBookmakr1, setIsOpenBookmark1] = useState(false);
  const [isOpenOwnStory1, setIsOpenOwnStory1] = useState(false);


  const allBookmarkStatus = [
    { visibleItems: visibleItems00, bookmarkStatus: bookmarkStatus },
    { visibleItems: visibleItems11, bookmarkStatus: bookmarkStatus1 },
    { visibleItems: visibleItems22, bookmarkStatus: bookmarkStatus2 },
    { visibleItems: visibleItems33, bookmarkStatus: bookmarkStatus3 },
    { visibleItems: visibleItems44, bookmarkStatus: bookmarkStatus4 },
    { visibleItems: visibleItems55, bookmarkStatus: bookmarkStatus5 },
    { visibleItems: visibleItems66, bookmarkStatus: bookmarkStatus6 },


  ];

  const customerData = JSON.parse(localStorage.getItem('customer'));
  const userId = customerData ? customerData._id : null;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 1500); // Adjust the interval duration as per your preference

    return () => {
      clearInterval(interval);
    };
  }, []);




  const handleHamburger1 = () => {
    setIsHambargerOpen(true)
  }
  const closeHambarger = () => {
    setIsHambargerOpen(false)
  }


  const handleLike = () => {
    const updatedItems = [...visibleItems00];
    const selectedProduct = updatedItems[selectedItemIndex];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems00(updatedItems);

    // Store the updated items in local storage
    localStorage.setItem('visibleItems00', JSON.stringify(updatedItems));
  };


  const handleLike1 = () => {
    const updatedItems = [...visibleItems11];
    const selectedProduct = updatedItems[selectedItemIndex1];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems11(updatedItems);
  };

  const handleLike2 = () => {
    const updatedItems = [...visibleItems22];
    const selectedProduct = updatedItems[selectedItemIndex2];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems22(updatedItems);
  };

  const handleLike3 = () => {
    const updatedItems = [...visibleItems33];
    const selectedProduct = updatedItems[selectedItemIndex3];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems33(updatedItems);
  };

  const handleLike4 = () => {
    const updatedItems = [...visibleItems44];
    const selectedProduct = updatedItems[selectedItemIndex4];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems44(updatedItems);
  };

  const handleLike5 = () => {
    const updatedItems = [...visibleItems55];
    const selectedProduct = updatedItems[selectedItemIndex5];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems55(updatedItems);
  };


  const handleLike6 = () => {
    const updatedItems = [...visibleItems66];
    const selectedProduct = updatedItems[selectedItemIndex6];

    if (!selectedProduct.likes) {
      selectedProduct.likes = 0;
    }

    if (!selectedProduct.liked) {
      selectedProduct.likes += 1;
    } else {
      selectedProduct.likes -= 1;
    }

    selectedProduct.liked = !selectedProduct.liked;
    setVisibleItems66(updatedItems);
  };





  const handleUser1 = () => {
    setLoginIsOpen(true)
  }

  const handleUser2 = () => {
    setLoginIsOpen(true)
  }

  const handleUser3 = () => {
    setLoginIsOpen(true)
  }

  const handleUser4 = () => {
    setLoginIsOpen(true)
  }



  const handleToggleExpand0 = () => {
    setExpanded0(!expanded0);
  };
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };
  const handleToggleExpand1 = () => {
    setExpanded1(!expanded1);
  };
  const handleToggleExpand2 = () => {
    setExpanded2(!expanded2);
  };
  const handleToggleExpand3 = () => {
    setExpanded3(!expanded3);
  };

  const visibleItems0 = expanded0 ? jobList : Array.isArray(jobList) ? jobList.slice(0, 4) : [];
  const visibleItems = expanded ? jobList1 : jobList1.slice(0, 4);
  const visibleItems1 = expanded1 ? jobList2 : jobList2.slice(0, 4);
  const visibleItems2 = expanded2 ? jobList3 : jobList3.slice(0, 4);
  const visibleItems3 = expanded3 ? jobList4 : jobList4.slice(0, 4);
  // const visibleItems4 = expanded4 ? jobList5 : jobList5.slice(0, 4);





  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleImageClick11 = (index) => {
    setSelectedImage1(index);
  };



  const handleResLogportion = () => {
    setResLoginOpen(true)
  }
  const handleResSignupgportion = () => {
    setResRegOpen(true)
  }

  const handleUser5 = () => {
    setResLoginOpen(true)
  }


  const navigate = useNavigate("");
  const auth = localStorage.getItem("customer");

  const handleLogout = () => {
    localStorage.clear();
    setSignUpIsOpen(false)
    window.location.reload();

    navigate("/");
  };

  const handleHamburger = () => {
    setLogoutIsOpen((prevState) => !prevState);
  };

  const handleSignUp = () => {
    setSignUpIsOpen(true)
  }

  useEffect(() => {
    const auth = localStorage.getItem("customer")
    if (auth) {
      navigate("/")
    }
  }, [])

  const CollectData = async () => {
    try {
      const response = await axios.post('https://swipttorybackend.onrender.com/register', { name, password });
      console.log(response.data); // Log the response data for debugging purposes

      // Extract the name and password from the request payload
      const { name: responseName, password: responsePassword } = JSON.parse(response.config.data);

      // Store the name and password in local storage
      localStorage.setItem('customer', JSON.stringify({ name: responseName, password: responsePassword }));

      navigate("/");
      window.location.reload();

      setName("");
      setPassword("");
    } catch (error) {
      console.log("Error occurred during the request:", error);
    }
  };

  const handleLogin = () => {
    setLoginIsOpen(true)
  }

  useEffect(() => {
    const auth = localStorage.getItem("customer")
    if (auth) {
      navigate("/")
    }
  }, [])

  const handleUser = async (e) => {
    try {
      console.log(name1, password1);
      const response = await axios.post('https://swipttorybackend.onrender.com/login', {
        name: name1,
        password: password1
      });

      const result = response.data;
      console.log(result);
      if (result) {
        setLoginIsOpen(false);
        window.location.reload();
        navigate("/");
        setName1("");
        setPassword1("");

      }
      localStorage.setItem('customer', JSON.stringify(result));
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  const handleClose = () => {
    setLoginIsOpen(false)
  }

  const handleClose1 = () => {
    setSignUpIsOpen(false)
  }

  const handleClose2 = () => {
    setResRegOpen(false)
  }

  const handleClose33 = () => {
    setResLoginOpen(false)
  }



  const handleAddStory = () => {
    setAddStoryIsOpen(true);
  }
  const handleAddStory1 = () => {
    setAddStoryIsOpen1(true);
  }

  const handleCloseAddToStory = () => {
    setAddStoryIsOpen(false)
    window.location.reload();

  }

  const handleCloseAddToStory1 = () => {
    setAddStoryIsOpen1(false)
    window.location.reload();

  }


  const handleSliderClick = (sliderIndex) => {
    setActiveSlider((prevSlider) => (prevSlider === sliderIndex ? null : sliderIndex));
  };


  const createForm = () => {
    if (formCount <= 5) {
      setFormCount(prevCount => prevCount + 1);
    }
  };


  const handlePreview = () => {
    setActiveSlider((prevSlider) => (prevSlider > 1 ? prevSlider - 1 : prevSlider));
  };

  const handleNext = () => {
    setActiveSlider((prevSlider) => (prevSlider < formCount ? prevSlider + 1 : prevSlider));
  };

  const collectStoryData = async (sliderId) => {
    const currentSlideData = slideData[sliderId - 1] || {};

    console.log(`Slider ${sliderId} - Heading: ${currentSlideData.heading}, Description: ${currentSlideData.description}, Image URL: ${currentSlideData.storyLogoURL}, Category: ${currentSlideData.category}`);

    try {
      // Post the slide data to the backend with the user ID
      await axios.post('https://swipttorybackend.onrender.com/addJob', { ...currentSlideData, userId });

      console.log('Slide data posted successfully');

      // Clear the form data for the current slide
      setSlideData((prevData) => {
        const newData = [...prevData];
        newData[sliderId - 1] = {};
        return newData;
      });

      // Move to the next slide
      setActiveSlider((prevSlider) => (prevSlider < formCount ? prevSlider + 1 : prevSlider));
    } catch (error) {
      console.log("Error occurred during the request:", error);
    }
  };

  // ...



  const renderForms = () => {
    const forms = [];
    for (let i = 1; i <= formCount; i++) {
      forms.push(
        <div
          key={i}
          className={`slidePart ${activeSlider === i ? 'active' : ''}`}
          onClick={() => handleSliderClick(i)}
        >
          Slide {i}
        </div>
      );

      if (activeSlider === i) {
        const currentSlideData = slideData[i - 1] || {}; // Get the data for the current slide

        forms.push(
          <div key={`input_${i}`} className="fromPortion">
            <label className="formInput1">
              Heading:
              <input
                type="text"
                name={`heading_${i}`}
                value={currentSlideData.heading || ''}
                className="formInput11"
                placeholder="Your heading"
                onChange={(e) => handleSlideInputChange(i, 'heading', e.target.value)}
              />
            </label><br /><br />
            <label className="formInput2">
              Description:
              <input
                type="text"
                name={`description_${i}`}
                value={currentSlideData.description || ''}
                className="formInput12"
                placeholder="Story Description"
                onChange={(e) => handleSlideInputChange(i, 'description', e.target.value)}
              />
            </label><br /><br />
            <label className="formInput3">
              Image:
              <input
                type="text"
                name={`storyLogoURL_${i}`}
                value={currentSlideData.storyLogoURL || ''}
                className="formInput13"
                placeholder="Add image URL"
                onChange={(e) => handleSlideInputChange(i, 'storyLogoURL', e.target.value)}
              />
            </label><br /><br />
            <label className="formInput4">
              Categary:
              <select
                className="formInput14"
                name={`categary_${i}`}
                value={currentSlideData.categary || ''}
                onChange={(e) => handleSlideInputChange(i, 'categary', e.target.value)}
              >
                <option value="">Select categary</option>
                <option>food</option>
                <option>health </option>
                <option>travel</option>
                <option>movies</option>
              </select>
            </label><br /><br /><br />
            <button className="previewButton1" onClick={handlePreview}>Preview</button>
            <button className="nextButton1" onClick={handleNext}>Next</button>

            <button className="postButton1" onClick={() => collectStoryData(i)}>Post</button>
          </div>
        );
      }
    }
    return forms;
  };

  const handleSlideInputChange = (sliderId, field, value) => {
    setSlideData((prevData) => {
      const newData = [...prevData];
      const slide = newData[sliderId - 1] || {};
      slide[field] = value;
      newData[sliderId - 1] = slide;
      return newData;
    });
  };

  useEffect(() => {
    getJobs();
    getJobs1();
    getJobs2();
    getJobs3();
    getJobs4();
    getJobs5();



  }, []);



  const getJobs = async () => {
    try {
      const response = await fetch('https://swipttorybackend.onrender.com/jobs');
      const result = await response.json();
      setJobList(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  const getJobs1 = async () => {
    try {
      const response1 = await fetch('https://swipttorybackend.onrender.com/job1');
      const result1 = await response1.json();
      setJobList1(result1);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const getJobs2 = async () => {
    try {
      const response = await fetch('https://swipttorybackend.onrender.com/job2');
      const result = await response.json();
      setJobList2(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const getJobs3 = async () => {
    try {
      const response = await fetch('https://swipttorybackend.onrender.com/job3');
      const result = await response.json();
      setJobList3(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const getJobs4 = async () => {
    try {
      const response = await fetch('https://swipttorybackend.onrender.com/job4');
      const result = await response.json();
      setJobList4(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };


  const getJobs5 = async () => {
    try {
      const response = await fetch('https://swipttorybackend.onrender.com/jobRes');
      const result = await response.json();
      setJobList5(result);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };



  useEffect(() => {
    fetchJobs()


  }, [filters])


  useEffect(() => {
    fetchJobs1()


  }, [filters1])

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://swipttorybackend.onrender.com/jobs', {
        params: { ...filters }

      });
      setJobList(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchJobs1 = async () => {
    try {
      const response = await axios.get('https://swipttorybackend.onrender.com/jobRes', {
        params: { ...filters1 }

      });
      setJobList5(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const handleFilterChange = (categaryValue, categary1Value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      categary: categaryValue,
    }));
  };

  const handleFilterChange1 = (categaryValue, categary1Value) => {
    setFilters1((prevFilters) => ({
      ...prevFilters,
      categary: categaryValue,
    }));
  };


  const closeEdit = () => {
    setEditStoryIsOpen(false)
  }

  const closeEdit1 = () => {
    setEditStoryIsOpen1(false)
  }

  const handleEdit = (id) => {
    console.log('Editing product with ID:', id);

    // Find the selected product by ID from the jobList
    const selectedProduct = jobList.find((product) => product._id === id);

    // Set the prefill values for the input fields
    setProductId(id); // Set the productId state
    setHeading(selectedProduct.heading);
    setDescription(selectedProduct.description);
    setStoryLogoURL(selectedProduct.storyLogoURL);
    setCategary(selectedProduct.categary);

    // Open the edit modal
    setEditStoryIsOpen(true);
  };

  const handleEdit1 = (id) => {
    console.log('Editing product with ID:', id);

    // Find the selected product by ID from the jobList
    const selectedProduct = jobList.find((product) => product._id === id);

    // Set the prefill values for the input fields
    setProductId(id); // Set the productId state
    setHeading(selectedProduct.heading);
    setDescription(selectedProduct.description);
    setStoryLogoURL(selectedProduct.storyLogoURL);
    setCategary(selectedProduct.categary);

    // Open the edit modal
    setEditStoryIsOpen1(true);
  };


  const handleJobForm1 = async () => {
    try {
      const updatedProduct = {
        _id: productId, // Use the productId state
        heading: heading,
        description: description,
        storyLogoURL: storyLogoURL,
        categary: categary
      };

      const response = await axios.put(`https://swipttorybackend.onrender.com/editJob/${productId}`, updatedProduct);

      if (response.status === 200) {
        console.log("Product updated successfully");
        setEditStoryIsOpen(false);
        window.location.reload();

      } else {
        console.log("Product update failed");
      }
    } catch (error) {
      console.log("Error occurred during product update:", error);
      // Handle error cases
    }
  };


  const handleJobForm2 = async () => {
    try {
      const updatedProduct = {
        _id: productId, // Use the productId state
        heading: heading,
        description: description,
        storyLogoURL: storyLogoURL,
        categary: categary
      };

      const response = await axios.put(`https://swipttorybackend.onrender.com/editJob/${productId}`, updatedProduct);

      if (response.status === 200) {
        console.log("Product updated successfully");
        setEditStoryIsOpen1(false);
        window.location.reload();

      } else {
        console.log("Product update failed");
      }
    } catch (error) {
      console.log("Error occurred during product update:", error);
      // Handle error cases
    }
  };


  const handleToggleExpand00 = () => {
    setExpanded0(!expanded0);
  };

  const handleViewStory = (category, index) => {
    const items = jobList.filter((item) => item.category === category);
    setVisibleItems00(items);
    setSelectedItemIndex(index);
    setIsViewStory(true);
  };

  const handleViewStory11 = (category, index) => {
    const items = jobList.filter((item) => item.category === category);
    setVisibleItems66(items);
    setSelectedItemIndex6(index);
    setIsViewStory6(true);
  };
  const handleViewStory1 = (category, index) => {
    const items = jobList1.filter((item) => item.category === category);
    setVisibleItems11(items);
    setSelectedItemIndex1(index);
    setIsViewStory1(true);
  };

  const handleViewStory2 = (category, index) => {
    const items = jobList2.filter((item) => item.category === category);
    setVisibleItems22(items);
    setSelectedItemIndex2(index);
    setIsViewStory2(true);
  };

  const handleViewStory3 = (category, index) => {
    const items = jobList3.filter((item) => item.category === category);
    setVisibleItems33(items);
    setSelectedItemIndex3(index);
    setIsViewStory3(true);
  };

  const handleViewStory4 = (category, index) => {
    const items = jobList4.filter((item) => item.category === category);
    setVisibleItems44(items);
    setSelectedItemIndex4(index);
    setIsViewStory4(true);
  };

  const handleViewStory5 = (category, index) => {
    const items = jobList5.filter((item) => item.category === category);
    setVisibleItems55(items);
    setSelectedItemIndex5(index);
    setIsViewStory5(true);
  };

  const closeModal = () => {
    setIsViewStory(false);
    setIsShare(false)
    setProgress(0)
  };

  const closeModal1 = () => {
    setIsViewStory1(false);
    setIsShare1(false)
    setProgress(0)



  };

  const closeModal2 = () => {
    setIsViewStory2(false);
    setIsShare2(false)
    setProgress(0)

  };

  const closeModal3 = () => {
    setIsViewStory3(false);
    setIsShare3(false)
    setProgress(0)

  };

  const closeModal4 = () => {
    setIsViewStory4(false);
    setIsShare4(false)
    setProgress(0)

  };

  const closeModal5 = () => {
    setIsViewStory5(false);
    setIsShare5(false)
    setProgress(0)

  };

  const closeModal6 = () => {
    setIsViewStory6(false);
    setIsShare6(false)
    setProgress(0)

  };

  const handlePrevItem = () => {
    const prevIndex = (selectedItemIndex - 1 + visibleItems00.length) % visibleItems00.length;
    setSelectedItemIndex(prevIndex);
  };

  const handlePrevItem6 = () => {
    const prevIndex = (selectedItemIndex6 - 1 + visibleItems66.length) % visibleItems66.length;
    setSelectedItemIndex6(prevIndex);
  };


  const handlePrevIte1m = () => {
    const prevIndex = (selectedItemIndex1 - 1 + visibleItems11.length) % visibleItems11.length;
    setSelectedItemIndex1(prevIndex);
  };

  const handlePrevItem1 = () => {
    const prevIndex = (selectedItemIndex1 - 1 + visibleItems11.length) % visibleItems11.length;
    setSelectedItemIndex1(prevIndex);
  };

  const handlePrevItem2 = () => {
    const prevIndex = (selectedItemIndex2 - 1 + visibleItems22.length) % visibleItems22.length;
    setSelectedItemIndex2(prevIndex);
  };

  const handlePrevItem3 = () => {
    const prevIndex = (selectedItemIndex3 - 1 + visibleItems33.length) % visibleItems33.length;
    setSelectedItemIndex3(prevIndex);
  };

  const handlePrevItem4 = () => {
    const prevIndex = (selectedItemIndex4 - 1 + visibleItems44.length) % visibleItems44.length;
    setSelectedItemIndex4(prevIndex);
  };

  const handlePrevItem5 = () => {
    const prevIndex = (selectedItemIndex5 - 1 + visibleItems55.length) % visibleItems55.length;
    setSelectedItemIndex5(prevIndex);
  };

  const handleNextItem = () => {
    const nextIndex = selectedItemIndex + 1;

    if (nextIndex >= visibleItems00.length) {
      setIsViewStory(false);
    } else {
      setSelectedItemIndex(nextIndex);
    }
  };

  const handleNextItem6 = () => {
    const nextIndex = selectedItemIndex6 + 1;

    if (nextIndex >= visibleItems66.length) {
      setIsViewStory6(false);
    } else {
      setSelectedItemIndex6(nextIndex);
    }
  };

  const handleNextItem1 = () => {
    const nextIndex = selectedItemIndex1 + 1;

    if (nextIndex >= visibleItems11.length) {
      setIsViewStory1(false);
    } else {
      setSelectedItemIndex1(nextIndex);
    }
  };

  const handleNextItem2 = () => {
    const nextIndex = selectedItemIndex2 + 1;

    if (nextIndex >= visibleItems22.length) {
      setIsViewStory2(false);
    } else {
      setSelectedItemIndex2(nextIndex);
    }
  };

  const handleNextItem3 = () => {
    const nextIndex = selectedItemIndex3 + 1;

    if (nextIndex >= visibleItems33.length) {
      setIsViewStory3(false);
    } else {
      setSelectedItemIndex3(nextIndex);
    }
  };

  const handleNextItem4 = () => {
    const nextIndex = selectedItemIndex4 + 1;

    if (nextIndex >= visibleItems44.length) {
      setIsViewStory4(false);
    } else {
      setSelectedItemIndex4(nextIndex);
    }
  };

  const handleNextItem5 = () => {
    const nextIndex = selectedItemIndex5 + 1;

    if (nextIndex >= visibleItems55.length) {
      setIsViewStory5(false);
    } else {
      setSelectedItemIndex5(nextIndex);
    }
  };


  useEffect(() => {
    let timer;

    if (isViewStory && visibleItems00.length > 1) {
      timer = setTimeout(() => {
        handleNextItem();
      }, 30000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isViewStory, visibleItems00, selectedItemIndex]);




  useEffect(() => {
    let timer6;

    if (isViewStory6 && visibleItems66.length > 1) {
      timer6 = setTimeout(() => {
        handleNextItem6();
      }, 30000);
    }

    return () => {
      clearTimeout(timer6);
    };
  }, [isViewStory6, visibleItems66, selectedItemIndex6]);



  useEffect(() => {
    let timer1;

    if (isViewStory1 && visibleItems11.length > 1) {
      timer1 = setTimeout(() => {
        handleNextItem1();
      }, 30000);
    }

    return () => {
      clearTimeout(timer1);
    };
  }, [isViewStory1, visibleItems11, selectedItemIndex1]);


  useEffect(() => {
    let timer2;

    if (isViewStory2 && visibleItems22.length > 1) {
      timer2 = setTimeout(() => {
        handleNextItem2();
      }, 30000);
    }

    return () => {
      clearTimeout(timer2);
    };
  }, [isViewStory2, visibleItems22, selectedItemIndex2]);


  useEffect(() => {
    let timer3;

    if (isViewStory3 && visibleItems33.length > 1) {
      timer3 = setTimeout(() => {
        handleNextItem3();
      }, 30000);
    }

    return () => {
      clearTimeout(timer3);
    };
  }, [isViewStory3, visibleItems33, selectedItemIndex3]);


  useEffect(() => {
    let timer4;

    if (isViewStory4 && visibleItems44.length > 1) {
      timer4 = setTimeout(() => {
        handleNextItem4();
      }, 30000);
    }

    return () => {
      clearTimeout(timer4);
    };
  }, [isViewStory4, visibleItems44, selectedItemIndex4]);



  useEffect(() => {
    let timer5;

    if (isViewStory5 && visibleItems55.length > 1) {
      timer5 = setTimeout(() => {
        handleNextItem5();
      }, 30000);
    }

    return () => {
      clearTimeout(timer5);
    };
  }, [isViewStory5, visibleItems55, selectedItemIndex5]);


  const handleShare = () => {
    // alert("your link has been copied")
    setIsShare(true)
  }

  const handleShare6 = () => {
    // alert("your link has been copied")
    setIsShare6(true)
  }

  const handleShare1 = () => {
    // alert("your link has been copied")
    setIsShare1(true)
  }

  const handleShare2 = () => {
    // alert("your link has been copied")
    setIsShare2(true)
  }

  const handleShare3 = () => {
    // alert("your link has been copied")
    setIsShare3(true)
  }

  const handleShare4 = () => {
    // alert("your link has been copied")
    setIsShare4(true)
  }

  const handleShare5 = () => {
    // alert("your link has been copied")
    setIsShare5(true)
  }




  const handleBookmark = () => {
    const updatedStatus = [...bookmarkStatus];
    updatedStatus[selectedItemIndex] = !updatedStatus[selectedItemIndex];
    setBookmarkStatus(updatedStatus);
  };

  const handleBookmark6 = () => {
    const updatedStatus = [...bookmarkStatus6];
    updatedStatus[selectedItemIndex6] = !updatedStatus[selectedItemIndex6];
    setBookmarkStatus6(updatedStatus);
  };

  const handleBookmark1 = () => {
    const updatedStatus = [...bookmarkStatus1];
    updatedStatus[selectedItemIndex1] = !updatedStatus[selectedItemIndex1];
    setBookmarkStatus1(updatedStatus);
  };

  const handleBookmark2 = () => {
    const updatedStatus = [...bookmarkStatus2];
    updatedStatus[selectedItemIndex2] = !updatedStatus[selectedItemIndex2];
    setBookmarkStatus2(updatedStatus);
  };

  const handleBookmark3 = () => {
    const updatedStatus = [...bookmarkStatus3];
    updatedStatus[selectedItemIndex3] = !updatedStatus[selectedItemIndex3];
    setBookmarkStatus3(updatedStatus);
  };

  const handleBookmark4 = () => {
    const updatedStatus = [...bookmarkStatus4];
    updatedStatus[selectedItemIndex4] = !updatedStatus[selectedItemIndex4];
    setBookmarkStatus4(updatedStatus);
  };

  const handleBookmark5 = () => {
    const updatedStatus = [...bookmarkStatus5];
    updatedStatus[selectedItemIndex5] = !updatedStatus[selectedItemIndex5];
    setBookmarkStatus5(updatedStatus);
  };

  const handleOpenBookmar = () => {
    setIsOpenBookmark(true)
  }
  const handleBookmarkOpen = () => {
    setIsOpenBookmark1(true)
  }

  const handleOwnStory = () => {
    setIsOpenOwnStory1(true)
  }


  return (
    <div>
      <img src={hamburger} className="humbarger1" onClick={handleHamburger1} alt="" />
      {
        isHambargerOpen && (
          <div className="box2">
            {auth ? (<>
              <img src={pImg} className="resUserPic" alt="" />
              <p className="resUserName">{JSON.parse(auth).name}</p>
              <button className="resYourStory" onClick={handleOwnStory}>Your Story</button>
              <button className="resAddStory" onClick={handleAddStory1}>Add Story</button>


              {
                addStoryIsOpen1 && (
                  <div className='modal'>
                    <div className='overlay'>
                      <div className='storyPortion'>
                        <img src={closebutton} className="closeButtonAdd" alt="" onClick={handleCloseAddToStory1} />
                        <p className='storyAddText'>Add story to feed</p>

                        <button className="createStory1" onClick={createForm}>Add +</button>
                        <div id="formContainer">
                          {renderForms()}
                        </div>

                      </div>
                    </div>
                  </div>
                )
              }

              <p className="resBookmark" onClick={handleBookmarkOpen}>Bookmark</p>
              <button className="resLogout" onClick={handleLogout}>Logout</button>


            </>) : (<>
              <button className="resLogin" onClick={handleResLogportion}>Login</button>
              {
                resLoginOpen && (
                  <div className="modal">
                    <div className='loginPortion1'>
                      <p className='loginText11'>Login to SwipTory</p><br />
                      <img src={closebutton} className='closeButton11' onClick={handleClose33} alt='' />
                      <label className='loginLebel11'> Username
                        <input type='text'
                          value={name1} placeholder='Enter username' className='loginInput11' onChange={(e) => setName1(e.target.value)} /><br />
                      </label>
                      <label className='loginLebel21'>Password
                        <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput22' onChange={(e) => setPassword1(e.target.value)} /><br />
                      </label>
                      <img src={eye} className='eye23' alt='' onClick={() => setShowPassword(!showPassword)} />
                      <button className='LoginButton1' onClick={handleUser}>Log in</button>
                    </div>

                  </div>
                )
              }
              <button className="resRegister" onClick={handleResSignupgportion}>Register</button>
              {
                resRegOpen && (
                  <div className="modal">
                    <div className="signupPortion1">

                      <p className='signupText2'>Registe to SwipTory</p>
                      <img src={closebutton} className='closeButton3' onClick={handleClose2} alt='' />

                      <label className='signupLebel11'>Username
                        <input type='text' className='signupInput11' placeholder='Enter username  ' value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                      </label>
                      <lable className="signupLebel21">Password
                        <input type={showPassword ? 'text' : 'password'}
                          className='signupInput21' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                      </lable>
                      <img src={eye} className='eye11' alt='' onClick={() => setShowPassword(!showPassword)} />

                      <button className='SignupButton1' onClick={CollectData}>Register</button>
                    </div>

                  </div>
                )

              }

            </>)}
            <p className="closeBurger" onClick={closeHambarger}>x</p>
          </div>
        )
      }
      {auth ? (
        <ul className="header1">
          <img src={pImg} className='pImg' alt='' />
          <img src={hamburger} className='hamburger' alt='' onClick={handleHamburger} />
          {logoutIsOpne && (
            <div className="box1">
              <li><Link to="/" className='userName'>{JSON.parse(auth).name}</Link></li>
              <Link to="/" className='NavLogout' onClick={handleLogout}><li>Logout</li></Link>
            </div>
          )}
        </ul>
      ) : (
        <>
          <p className='NavSignup' onClick={handleSignUp}>Register Now</p>
          {SignUpIsOpen && (
            <div className='modal'>
              <div className='overlay'>
                <div className="signupPortion">

                  <p className='signupText1'>Singup here</p>
                  <img src={closebutton} className='closeButton2' onClick={handleClose1} alt='' />

                  <label className='signupLebel1'>Username
                    <input type='text' className='signupInput1' placeholder='Enter username  ' value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                  </label>
                  <lable className="signupLebel2">Password
                    <input type={showPassword ? 'text' : 'password'}
                      className='signupInput2' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                  </lable>
                  <img src={eye} className='eye' alt='' onClick={() => setShowPassword(!showPassword)} />

                  <button className='SignupButton' onClick={CollectData}>Sign up</button>
                </div>

              </div>
            </div>
          )}
          <p className='NavLogin' onClick={handleLogin}>Sign In</p>
          {
            LoginIsOpen && (
              <div className='modal'>
                <div className='overlay'>
                  <div className='loginPortion'>
                    <p className='loginText1'>Login to SwipTory</p><br />
                    <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                    <label className='loginLebel1'> Username
                      <input type='text'
                        value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} /><br />
                    </label>
                    <label className='loginLebel2'>Password
                      <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} /><br />
                    </label>
                    <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                    <button className='LoginButton' onClick={handleUser}>Log in</button>
                  </div>

                </div>

              </div>
            )
          }
        </>
      )}


      {auth ? (
        <>
          <img src={bookmarks} className='bookmarkIcon' alt='' />
          <p className='bookmarks' onClick={handleOpenBookmar}>Bookmarks</p>
          <p className='addStory' onClick={handleAddStory}>Add story</p>
          {
            addStoryIsOpen && (
              <div className='modal'>
                <div className='overlay'>
                  <div className='storyPortion'>
                    <img src={closebutton} className="closeButton13" alt="" onClick={handleCloseAddToStory} />
                    <p className='storyLength'>Add upto 6 slides </p>

                    <button className="createStory" onClick={createForm}>Add +</button>
                    <div id="formContainer">
                      {renderForms()}
                    </div>

                  </div>
                </div>
              </div>
            )
          }
        </>
      ) : ("")
      }


      <div className="products">

        <div className="filters">
          <div className={filters.categary === "" ? "active" : ""}
            onClick={() => handleFilterChange("")}
          >
            <p className="filterAll" onClick={() => handleImageClick(0)}>All</p>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b0/ac/db/round-the-global-diner.jpg" className={`filter0 ${selectedImage === 0 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick(0)} />
          </div>
          <div
            className={filters.categary === "health" ? 'active' : ''}
            onClick={() => handleFilterChange('health')}
          >
            <p className="filterHealth" onClick={() => handleImageClick(1)}>Health</p>
            <img src="https://www.healthkart.com/connect/wp-content/uploads/2021/09/900x500_banner_HK-Connect_How-to-Improve-Heart-Health-_-Points-To-Keep-In-Mind.jpg" className={`filter1 ${selectedImage === 1 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick(1)} />
          </div>
          <div className={filters.categary === "food" ? "active" : ""}
            onClick={() => handleFilterChange("food")}>
            <p className="filterFood" onClick={() => handleImageClick(2)}>Food</p>
            <img src="https://static.toiimg.com/photo/56624568.cms" className={`filter2 ${selectedImage === 2 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick(2)} />
          </div>
          <div className={filters.categary === "travel" ? "active" : ""}
            onClick={() => handleFilterChange("travel")}>
            <p className="filterTravel" onClick={() => handleImageClick(3)}>Travel</p>
            <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg" className={`filter3 ${selectedImage === 3 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick(3)} />
          </div>
          <div className={filters.categary === "movies" ? "active" : ""}
            onClick={() => handleFilterChange("movies")}>
            <p className="filterMovies" onClick={() => handleImageClick(4)}>Movies</p>
            <img src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=" className={`filter4 ${selectedImage === 4 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick(4)} />
          </div>


        </div>


        <div className="filters2">
          <div className={filters1.categary === "" ? "active" : ""}
            onClick={() => handleFilterChange1("")}
          >
            <p className="filterAll1" onClick={() => handleImageClick11(0)}>All</p>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b0/ac/db/round-the-global-diner.jpg" className={`filterA1 ${selectedImage1 === 0 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick11(0)} />
          </div>
          <div
            className={filters1.categary === "health" ? 'active' : ''}
            onClick={() => handleFilterChange1('health')}
          >
            <p className="filterHealth1" onClick={() => handleImageClick11(1)}>Health</p>
            <img src="https://www.healthkart.com/connect/wp-content/uploads/2021/09/900x500_banner_HK-Connect_How-to-Improve-Heart-Health-_-Points-To-Keep-In-Mind.jpg" className={`filterA2 ${selectedImage1 === 1 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick11(1)} />
          </div>
          <div className={filters1.categary === "food" ? "active" : ""}
            onClick={() => handleFilterChange1("food")}>
            <p className="filterFood1" onClick={() => handleImageClick11(2)}>Food</p>
            <img src="https://static.toiimg.com/photo/56624568.cms" className={`filterA3 ${selectedImage1 === 2 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick11(2)} />
          </div>
          <div className={filters1.categary === "travel" ? "active" : ""}
            onClick={() => handleFilterChange1("travel")}>
            <p className="filterTravel1" onClick={() => handleImageClick11(3)}>Travel</p>
            <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg" className={`filterA4 ${selectedImage1 === 3 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick11(3)} />
          </div>
          <div className={filters1.categary === "movies" ? "active" : ""}
            onClick={() => handleFilterChange1("movies")}>
            <p className="filterMovies1" onClick={() => handleImageClick11(4)}>Movies</p>
            <img src="https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=" className={`filterA5 ${selectedImage1 === 4 ? 'selected' : ''}`} alt="" onClick={() => handleImageClick11(4)} />
          </div>


        </div>




        {isOpenBookmakr && (
          <>
            <p className="YourBookmark">Your Bookmarks</p>
            {allBookmarkStatus.some((bookmark) => bookmark.bookmarkStatus.length > 0) ? (
              allBookmarkStatus.map((bookmarkItem, index) =>
                bookmarkItem.bookmarkStatus.map((isBookmarked, itemIndex) => {
                  if (isBookmarked) {
                    const product = bookmarkItem.visibleItems[itemIndex];
                    const { storyLogoURL, heading, description } = product; // Destructure the required properties
                    return (
                      <ul key={`${index}-${itemIndex}`} className="jobFormateBoo">
                        <img src={storyLogoURL} className="imgSizeBoo" alt="" />
                        <p className="jobFormateHeadingBoo">{heading}</p>
                        <p className="jobFormateDescriptionBoo">{description}</p>
                      </ul>
                    );
                  } else {
                    return null;
                  }
                })
              )
            ) : (
              <p className="showText">Oops, 😥Please add stories to your bookmarks.</p>
            )}
          </>
        )}
        {auth ? (<   >

          <p className="YourStoryText">Your Stories</p>
          <div className="produtsList1">
            {visibleItems0.length > 0 ? (
              visibleItems0.map((item, index) => (
                <ul className="jobFormate" key={index} onClick={() => handleViewStory(item.category, index)}>
                  <img src={item.storyLogoURL} className="imgSize" alt="" />
                  <p className="jobFormateHeading">{item.heading}</p>
                  <p className="jobFormateDescription">{item.description}</p>
                  <div onClick={() => handleEdit(item._id)}>
                    <p className="editText">Edit</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" className="editIcon" alt="" />
                  </div>

                </ul>
              ))
            ) : (
              <p className="noJobFound">😔 Oops, Please add your story.</p>
            )}

            {jobList.length > 4 && (
              <button onClick={handleToggleExpand0} className="hideUnhide0">
                {expanded0 ? 'See Less' : 'See More'}
              </button>
            )}
          </div>
        </>) : ("")
        }



        {isViewStory && visibleItems00[selectedItemIndex] && (
          <div className="modal">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem} />
            <div className="progressBarContainer">
              <div
                className="progressBar"
                style={{
                  width: `${progress}%`,
                  backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                }}
              />
            </div>
            <div className="jobFormate0">
              {visibleItems00[selectedItemIndex].storyLogoURL && (
                <img src={visibleItems00[selectedItemIndex].storyLogoURL} className="imgSize1" />
              )}
              <p className="jobFormateHeading1">{visibleItems00[selectedItemIndex].heading}</p>
              <p className="jobFormateDescription1">{visibleItems00[selectedItemIndex].description}</p>
              <img src={share} className="shareIcon" onClick={handleShare} alt="" />
              {isShare && (
                <div>
                  <p className="shareOutputText">{`${visibleItems00[selectedItemIndex].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00" onClick={handleBookmark} alt="" />
              {bookmarkStatus[selectedItemIndex] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11" alt="" />
                  ) :
                    ("")

                  }
                </>
              )}
              <button className="countButton" onClick={handleLike}>
                {visibleItems00[selectedItemIndex].liked ? (
                  <img src={redLike} className="like00" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count">{visibleItems00[selectedItemIndex].likes || 0}</p>
                </>
              ) : (
                ""
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem} />
            <p className="closebutton00" onClick={closeModal}>x</p>
          </div>
        )}


        {isViewStory1 && visibleItems11[selectedItemIndex1] && (
          <div className="modalBookmark">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem1} />
            <div className="progressBarContainer">
              <div
                className="progressBar"
                style={{
                  width: `${progress}%`,
                  backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                }}
              />
            </div>
            <div className="jobFormate0">
              {visibleItems11[selectedItemIndex1].storyLogoURL && (
                <img src={visibleItems11[selectedItemIndex1].storyLogoURL} className="imgSize1" />
              )}
              <p className="jobFormateHeading1">{visibleItems11[selectedItemIndex1].heading}</p>
              <p className="jobFormateDescription1">{visibleItems11[selectedItemIndex1].description}</p>
              <img src={share} className="shareIcon" onClick={handleShare1} alt="" />
              {isShare1 && (
                <div>
                  <p className="shareOutputText">{`${visibleItems11[selectedItemIndex1].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00" onClick={auth ? handleBookmark1 : handleUser1} alt="" />
              {bookmarkStatus1[selectedItemIndex1] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11" alt="" />
                  ) : (
                    <>
                      {LoginIsOpen ? (
                        <div className='modal'>
                          <div className='overlay'>
                            <div className='loginPortion'>
                              <p className='loginText1'>Login to SwipTory</p><br />
                              <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                              <label className='loginLabel1'>Username
                                <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                              </label>
                              <label className='loginLabel2'>Password
                                <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                              </label>
                              <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                              <button className='LoginButton' onClick={handleUser}>Log in</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p style={{ color: "green" }}>Please log in</p>
                      )}
                    </>
                  )}
                </>
              )}

              <button className="countButton" onClick={auth ? handleLike1 : handleUser1}>
                {visibleItems11[selectedItemIndex1].liked ? (
                  <img src={redLike} className="like00" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count">{visibleItems11[selectedItemIndex1].likes || 0}</p>

                </>
              ) : (
                <>
                  {LoginIsOpen ? (
                    <div className='modal'>
                      <div className='overlay'>
                        <div className='loginPortion'>
                          <p className='loginText1'>Login to SwipTory</p><br />
                          <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                          <label className='loginLabel1'>Username
                            <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                          </label>
                          <label className='loginLabel2'>Password
                            <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                          </label>
                          <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                          <button className='LoginButton' onClick={handleUser}>Log in</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: "green" }}>Please log in</p>
                  )}

                </>
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem1} />
            <p className="closebutton00" onClick={closeModal1}>x</p>
          </div>
        )}


        {isViewStory2 && visibleItems22[selectedItemIndex2] && (
          <div className="modalBookmark">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem2} />
            <div className="progressBarContainer">
              <div
                className="progressBar"
                style={{
                  width: `${progress}%`,
                  backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                }}
              />
            </div>
            <div className="jobFormate0">
              {visibleItems22[selectedItemIndex2].storyLogoURL && (
                <img src={visibleItems22[selectedItemIndex2].storyLogoURL} className="imgSize1" />
              )}
              <p className="jobFormateHeading1">{visibleItems22[selectedItemIndex2].heading}</p>
              <p className="jobFormateDescription1">{visibleItems22[selectedItemIndex2].description}</p>
              <img src={share} className="shareIcon" onClick={handleShare2} alt="" />
              {isShare2 && (
                <div>
                  <p className="shareOutputText">{`${visibleItems22[selectedItemIndex2].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00" onClick={auth ? handleBookmark2 : handleUser2} alt="" />
              {bookmarkStatus2[selectedItemIndex2] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11" alt="" />
                  ) : (
                    <>
                      {LoginIsOpen ? (
                        <div className='modal'>
                          <div className='overlay'>
                            <div className='loginPortion'>
                              <p className='loginText1'>Login to SwipTory</p><br />
                              <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                              <label className='loginLabel1'>Username
                                <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                              </label>
                              <label className='loginLabel2'>Password
                                <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                              </label>
                              <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                              <button className='LoginButton' onClick={handleUser}>Log in</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p style={{ color: "green" }}>Please log in</p>
                      )}
                    </>
                  )}
                </>
              )}


              <button className="countButton" onClick={auth ? handleLike2 : handleUser2}>
                {visibleItems22[selectedItemIndex2].liked ? (
                  <img src={redLike} className="like00" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count">{visibleItems22[selectedItemIndex2].likes || 0}</p>

                </>
              ) : (
                <>
                  {LoginIsOpen ? (
                    <div className='modal'>
                      <div className='overlay'>
                        <div className='loginPortion'>
                          <p className='loginText1'>Login to SwipTory</p><br />
                          <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                          <label className='loginLabel1'>Username
                            <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                          </label>
                          <label className='loginLabel2'>Password
                            <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                          </label>
                          <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                          <button className='LoginButton' onClick={handleUser}>Log in</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: "green" }}>Please log in</p>
                  )}

                </>
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem2} />
            <p className="closebutton00" onClick={closeModal2}>x</p>
          </div>
        )}



        {isViewStory3 && visibleItems33[selectedItemIndex3] && (
          <div className="modalBookmark">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem3} />
            <div className="progressBarContainer">
              <div
                className="progressBar"
                style={{
                  width: `${progress}%`,
                  backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                }}
              />
            </div>
            <div className="jobFormate0">
              {visibleItems33[selectedItemIndex3].storyLogoURL && (
                <img src={visibleItems33[selectedItemIndex3].storyLogoURL} className="imgSize1" />
              )}
              <p className="jobFormateHeading1">{visibleItems33[selectedItemIndex3].heading}</p>
              <p className="jobFormateDescription1">{visibleItems33[selectedItemIndex3].description}</p>
              <img src={share} className="shareIcon" onClick={handleShare3} alt="" />
              {isShare3 && (
                <div>
                  <p className="shareOutputText">{`${visibleItems33[selectedItemIndex3].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00" onClick={auth ? handleBookmark3 : handleUser3} alt="" />
              {bookmarkStatus3[selectedItemIndex3] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11" alt="" />
                  ) : (
                    <>
                      {LoginIsOpen ? (
                        <div className='modal'>
                          <div className='overlay'>
                            <div className='loginPortion'>
                              <p className='loginText1'>Login to SwipTory</p><br />
                              <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                              <label className='loginLabel1'>Username
                                <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                              </label>
                              <label className='loginLabel2'>Password
                                <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                              </label>
                              <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                              <button className='LoginButton' onClick={handleUser}>Log in</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p style={{ color: "green" }}>Please log in</p>
                      )}
                    </>
                  )}
                </>
              )}

              <button className="countButton" onClick={auth ? handleLike3 : handleUser3}>
                {visibleItems33[selectedItemIndex3].liked ? (
                  <img src={redLike} className="like00" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count">{visibleItems33[selectedItemIndex3].likes || 0}</p>

                </>
              ) : (
                <>
                  {LoginIsOpen ? (
                    <div className='modal'>
                      <div className='overlay'>
                        <div className='loginPortion'>
                          <p className='loginText1'>Login to SwipTory</p><br />
                          <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                          <label className='loginLabel1'>Username
                            <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                          </label>
                          <label className='loginLabel2'>Password
                            <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                          </label>
                          <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                          <button className='LoginButton' onClick={handleUser}>Log in</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: "green" }}>Please log in</p>
                  )}

                </>
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem3} />
            <p className="closebutton00" onClick={closeModal3}>x</p>
          </div>
        )}



        {isViewStory4 && visibleItems44[selectedItemIndex4] && (
          <div className="modalBookmark">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem4} />
            <div className="progressBarContainer">
              <div
                className="progressBar"
                style={{
                  width: `${progress}%`,
                  backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                }}
              />
            </div>
            <div className="jobFormate0">
              {visibleItems44[selectedItemIndex4].storyLogoURL && (
                <img src={visibleItems44[selectedItemIndex4].storyLogoURL} className="imgSize1" />
              )}
              <p className="jobFormateHeading1">{visibleItems44[selectedItemIndex4].heading}</p>
              <p className="jobFormateDescription1">{visibleItems44[selectedItemIndex4].description}</p>
              <img src={share} className="shareIcon" onClick={handleShare4} alt="" />
              {isShare4 && (
                <div>
                  <p className="shareOutputText">{`${visibleItems44[selectedItemIndex4].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00" onClick={auth ? handleBookmark4 : handleUser4} alt="" />
              {bookmarkStatus4[selectedItemIndex4] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11" alt="" />
                  ) : (
                    <>
                      {LoginIsOpen ? (
                        <div className='modal'>
                          <div className='overlay'>
                            <div className='loginPortion'>
                              <p className='loginText1'>Login to SwipTory</p><br />
                              <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                              <label className='loginLabel1'>Username
                                <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                              </label>
                              <label className='loginLabel2'>Password
                                <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                              </label>
                              <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                              <button className='LoginButton' onClick={handleUser}>Log in</button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p style={{ color: "green" }}>Please log in</p>
                      )}
                    </>
                  )}
                </>
              )}

              <button className="countButton" onClick={auth ? handleLike4 : handleUser4}>
                {visibleItems44[selectedItemIndex4].liked ? (
                  <img src={redLike} className="like00" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count">{visibleItems44[selectedItemIndex4].likes || 0}</p>

                </>
              ) : (
                <>
                  {LoginIsOpen ? (
                    <div className='modal'>
                      <div className='overlay'>
                        <div className='loginPortion'>
                          <p className='loginText1'>Login to SwipTory</p><br />
                          <img src={closebutton} className='closeButton1' onClick={handleClose} alt='' />
                          <label className='loginLabel1'>Username
                            <input type='text' value={name1} placeholder='Enter username' className='loginInput1' onChange={(e) => setName1(e.target.value)} />
                          </label>
                          <label className='loginLabel2'>Password
                            <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput2' onChange={(e) => setPassword1(e.target.value)} />
                          </label>
                          <img src={eye} className='eye1' alt='' onClick={() => setShowPassword(!showPassword)} />
                          <button className='LoginButton' onClick={handleUser}>Log in</button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{ color: "green" }}>Please log in</p>
                  )}

                </>
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem4} />
            <p className="closebutton00" onClick={closeModal4}>x</p>
          </div>
        )}




        {isViewStory5 && visibleItems55[selectedItemIndex5] && (
          <div className="modalBookmark">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem5} />
            <div className="jobFormateResO">
              {visibleItems55[selectedItemIndex5].storyLogoURL && (
                <img src={visibleItems55[selectedItemIndex5].storyLogoURL} className="imgSize10" />
              )}
              <div className="progressBarContainer0">
                <div
                  className="progressBar"
                  style={{
                    width: `${progress}%`,
                    backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                  }}
                />
              </div>

              <p className="jobFormateHeading10">{visibleItems55[selectedItemIndex5].heading}</p>
              <p className="jobFormateDescription10">{visibleItems55[selectedItemIndex5].description}</p>
              <img src={share} className="shareIcon0" onClick={handleShare5} alt="" />
              {isShare5 && (
                <div>
                  <p className="shareOutputText0">{`${visibleItems55[selectedItemIndex5].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark000" onClick={auth ? handleBookmark5 : handleUser5} alt="" />
              {bookmarkStatus5[selectedItemIndex5] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark111" alt="" />
                  ) : (
                    <>
                      {resLoginOpen ? (
                        <div className="modal">
                          <div className='loginPortion1'>
                            <p className='loginText11'>Login to SwipTory</p><br />
                            <img src={closebutton} className='closeButton11' onClick={handleClose33} alt='' />
                            <label className='loginLebel11'> Username
                              <input type='text'
                                value={name1} placeholder='Enter username' className='loginInput11' onChange={(e) => setName1(e.target.value)} /><br />
                            </label>
                            <label className='loginLebel21'>Password
                              <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput22' onChange={(e) => setPassword1(e.target.value)} /><br />
                            </label>
                            <img src={eye} className='eye23' alt='' onClick={() => setShowPassword(!showPassword)} />
                            <button className='LoginButton1' onClick={handleUser}>Log in</button>
                          </div>

                        </div>
                      ) : (
                        <p style={{ color: "green" }}>Please log in</p>
                      )}
                    </>
                  )}
                </>
              )}

              <button className="countButton0" onClick={auth ? handleLike5 : handleUser5}>
                {visibleItems55[selectedItemIndex5].liked ? (
                  <img src={redLike} className="like000" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like000" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="count0">{visibleItems55[selectedItemIndex5].likes || 0}</p>

                </>
              ) : (
                <>
                  {resLoginOpen ? (
                    <div className="modal">
                      <div className='loginPortion1'>
                        <p className='loginText11'>Login to SwipTory</p><br />
                        <img src={closebutton} className='closeButton11' onClick={handleClose33} alt='' />
                        <label className='loginLebel11'> Username
                          <input type='text'
                            value={name1} placeholder='Enter username' className='loginInput11' onChange={(e) => setName1(e.target.value)} /><br />
                        </label>
                        <label className='loginLebel21'>Password
                          <input type={showPassword ? 'text' : 'password'} value={password1} placeholder='Enter password' className='loginInput22' onChange={(e) => setPassword1(e.target.value)} /><br />
                        </label>
                        <img src={eye} className='eye23' alt='' onClick={() => setShowPassword(!showPassword)} />
                        <button className='LoginButton1' onClick={handleUser}>Log in</button>
                      </div>

                    </div>
                  ) : (
                    <p style={{ color: "green" }}>Please log in</p>
                  )}

                </>
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem5} />
            <p className="closebutton000" onClick={closeModal5}>x</p>
          </div>
        )}


        {isViewStory6 && visibleItems66[selectedItemIndex6] && (
          <div className="modal">
            <img src={left} className="leftArrow" alt="" onClick={handlePrevItem6} />
            <div className="jobFormateRes1">


              <div className="progressBarContainerRes">
                <div
                  className="progressBar"
                  style={{
                    width: `${progress}%`,
                    backgroundImage: `linear-gradient(to right, #4caf50, #4caf50 10%, transparent 10%)`,
                  }}
                />
              </div>


              {visibleItems66[selectedItemIndex6].storyLogoURL && (
                <img src={visibleItems66[selectedItemIndex6].storyLogoURL} className="imgSizeRes1" />
              )}
              <p className="jobFormateHeadingRes1">{visibleItems66[selectedItemIndex6].heading}</p>
              <p className="jobFormateDescriptionRes1">{visibleItems66[selectedItemIndex6].description}</p>
              <img src={share} className="shareIconRes1" onClick={handleShare6} alt="" />
              {isShare6 && (
                <div>
                  <p className="shareOutputTextAA">{`${visibleItems66[selectedItemIndex6].heading} story Link copied to clipboard`}</p>
                </div>
              )}
              <img src={bookmark00} className="bookmark00Res" onClick={handleBookmark6} alt="" />
              {bookmarkStatus6[selectedItemIndex6] && (
                <>
                  {auth ? (
                    <img src={bookBlue} className="bookmark11Res" alt="" />
                  ) :
                    ("")

                  }
                </>
              )}
              <button className="countButtonRes" onClick={handleLike6}>
                {visibleItems66[selectedItemIndex6].liked ? (
                  <img src={redLike} className="like00Res" alt="Red Heart" />
                ) : (
                  <img src={whiteLike} className="like00Res" alt="White Heart" />
                )}
              </button>
              {auth ? (
                <>
                  <p className="countRes">{visibleItems66[selectedItemIndex6].likes || 0}</p>
                </>
              ) : (
                ""
              )}
            </div>
            <img src={right} className="rightArrow" alt="" onClick={handleNextItem6} />
            <p className="closebutton00Res" onClick={closeModal6}>x</p>
          </div>
        )}


        {editStoryIsOpen1 && (
          <div className="modal">
            <div className="editPortion1">
              <p className="updateText1">Update Your Story</p>
              <img src={closebutton} className="editClose1" alt="" onClick={closeEdit1} />
              <label className="formInput011">
                Heading:
                <input
                  type="text"
                  name="heading"
                  value={heading}
                  className="formInput211"
                  placeholder="Your heading"
                  onChange={(e) => setHeading(e.target.value)}
                />
              </label><br /><br />
              <label className="formInput022">
                Description:
                <input
                  type="text"
                  name="description"
                  value={description}
                  className="formInput222"
                  placeholder="Story Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label><br /><br />
              <label className="formInput033">
                Image:
                <input
                  type="text"
                  name="storyLogoURL"
                  value={storyLogoURL}
                  className="formInput233"
                  placeholder="Add image URL"
                  onChange={(e) => setStoryLogoURL(e.target.value)}
                />
              </label><br /><br />
              <label className="formInput044">
                Categary:
                <select
                  className="formInput244"
                  name="categary"
                  value={categary}
                  onChange={(e) => setCategary(e.target.value)}
                >
                  <option value="">Select categary</option>
                  <option>food</option>
                  <option>health </option>
                  <option>travel</option>
                  <option>movies</option>
                </select>
              </label><br /><br /><br />

              <button className="postButton111" onClick={handleJobForm2}>Edited</button>
            </div>
          </div>
        )
        }





        {auth ? (<>
          {editStoryIsOpen && (
            <div className="modal">
              <div className="editPortion">
                <p className="updateText">Update Your Story</p>
                <img src={closebutton} className="editClose" alt="" onClick={closeEdit} />
                <label className="formInput01">
                  Heading:
                  <input
                    type="text"
                    name="heading"
                    value={heading}
                    className="formInput21"
                    placeholder="Your heading"
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </label><br /><br />
                <label className="formInput02">
                  Description:
                  <input
                    type="text"
                    name="description"
                    value={description}
                    className="formInput22"
                    placeholder="Story Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label><br /><br />
                <label className="formInput03">
                  Image:
                  <input
                    type="text"
                    name="storyLogoURL"
                    value={storyLogoURL}
                    className="formInput23"
                    placeholder="Add image URL"
                    onChange={(e) => setStoryLogoURL(e.target.value)}
                  />
                </label><br /><br />
                <label className="formInput04">
                  Categary:
                  <select
                    className="formInput24"
                    name="categary"
                    value={categary}
                    onChange={(e) => setCategary(e.target.value)}
                  >
                    <option value="">Select categary</option>
                    <option>food</option>
                    <option>health </option>
                    <option>travel</option>
                    <option>movies</option>
                  </select>
                </label><br /><br /><br />

                <button className="postButton11" onClick={handleJobForm1}>Edited</button>
              </div>
            </div>
          )
          }
        </>) : ("")

        }

        <p className="otherStoryText1">Top stories about Movies</p>
        <div className="produtsList11">
          {visibleItems.length > 0 ? (
            visibleItems.map((item, index) => (
              <ul className="jobFormate1" key={index} onClick={() => handleViewStory1(item.category, index)}>
                <img src={item.storyLogoURL} className="imgSize" alt="" />
                <p className="jobFormateHeading">{item.heading}</p>
                <p className="jobFormateDescription">{item.description}</p>
              </ul>
            ))
          ) : (
            <p className='noJobFound'>😔 Oops, No story found.</p>
          )}

          {jobList1.length > 4 && (
            <button onClick={handleToggleExpand} className="hideUnhide">
              {expanded ? 'See Less' : 'See More'}
            </button>
          )}
        </div>
        <p className="otherStoryText2">Top stories about Travel</p>

        <div className="produtsList2">
          {visibleItems1.length > 0 ? (
            visibleItems1.map((item, index) => (
              <ul className="jobFormate2" key={index} onClick={() => handleViewStory2(item.category, index)}>
                <img src={item.storyLogoURL} className="imgSize" alt="" />
                <p className="jobFormateHeading">{item.heading}</p>
                <p className="jobFormateDescription">{item.description}</p>
              </ul>
            ))
          ) : (
            <p className='noJobFound'>😔 Oops, No story found.</p>
          )}

          {jobList2.length > 4 && (
            <button onClick={handleToggleExpand1} className="hideUnhide1">
              {expanded1 ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        <p className="otherStoryText3">Top stories about Health</p>
        <div className="produtsList3">
          {visibleItems2.length > 0 ? (
            visibleItems2.map((item, index) => (
              <ul className="jobFormate3" key={index} onClick={() => handleViewStory3(item.category, index)}>
                <img src={item.storyLogoURL} className="imgSize" alt="" />
                <p className="jobFormateHeading">{item.heading}</p>
                <p className="jobFormateDescription">{item.description}</p>
              </ul>
            ))
          ) : (
            <p className='noJobFound'>😔 Oops, No story found.</p>
          )}

          {jobList3.length > 4 && (
            <button onClick={handleToggleExpand2} className="hideUnhide2">
              {expanded2 ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        <p className="otherStoryText4">Top stories about Food</p>
        <div className="produtsList4">
          {visibleItems3.length > 0 ? (
            visibleItems3.map((item, index) => (
              <ul className="jobFormate4" key={index} onClick={() => handleViewStory4(item.category, index)}>
                <img src={item.storyLogoURL} className="imgSize" alt="" />
                <p className="jobFormateHeading">{item.heading}</p>
                <p className="jobFormateDescription">{item.description}</p>
              </ul>
            ))
          ) : (
            <p className='noJobFound'>😔 Oops, No story found.</p>
          )}

          {jobList4.length > 4 && (
            <button onClick={handleToggleExpand3} className="hideUnhide3">
              {expanded3 ? 'See Less' : 'See More'}
            </button>
          )}
        </div>

        {auth ? (
          <>
            {isOpenOwnStory1 && (

              <>
                <p className="YourStoryText22">Your Stories</p>
                <div className="produtsList22">
                  {visibleItems0.length > 0 ? (
                    visibleItems0.map((item, index) => (
                      <ul className="jobFormate22" key={index} onClick={() => handleViewStory11(item.category, index)}>
                        <img src={item.storyLogoURL} className="imgSizeResoo" alt="" />
                        <p className="jobFormateHeadingReso">{item.heading}</p>
                        <p className="jobFormateDescriptionReso">{item.description}</p>
                        <div onClick={() => handleEdit1(item._id)}>
                          <p className="editText00">Edit</p>
                          <img src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" className="editIcon00" alt="" />
                        </div>

                      </ul>
                    ))
                  ) : (
                    <p className="noJobFound">😔 Oops, No story found.</p>
                  )}

                </div>

              </>

            )
            }
          </>
        ) :
          ("")
        }

        {isOpenBookmakr1 && (
          <div className="resBooks">
            <p className="YourBookmarkReso">Your Bookmarks</p>
            {allBookmarkStatus.some((bookmark) => bookmark.bookmarkStatus.length > 0) ? (
              allBookmarkStatus.map((bookmarkItem, index) =>
                bookmarkItem.bookmarkStatus.map((isBookmarked, itemIndex) => {
                  if (isBookmarked) {
                    const product = bookmarkItem.visibleItems[itemIndex];
                    const { storyLogoURL, heading, description } = product; // Destructure the required properties
                    return (
                      <ul key={`${index}-${itemIndex}`} className="jobFormateReso">
                        <img src={storyLogoURL} className="imgSizeReso" alt="" />
                        <p className="jobFormateHeadingReso">{heading}</p>
                        <p className="jobFormateDescriptionReso">{description}</p>
                      </ul>
                    );
                  } else {
                    return null;
                  }
                })
              )
            ) : (
              <p className="showText11">Oops, 😥Please add stories to your bookmarks.</p>

            )}              </div>
        )
        }


        <div className="resProducts">
          <div className="produtsListRes">
            {/* <p className="YourBookmarkRes">Stories</p> */}

            {jobList5.length > 0 ? (
              jobList5.map((item, index) => (
                <ul className="jobFormateRes" key={index} onClick={() => handleViewStory5(item.category, index)}>
                  <img src={item.storyLogoURL} className="imgSizeRes" alt="" />
                  <p className="jobFormateHeadingRes">{item.heading}</p>
                  <p className="jobFormateDescriptionRes">{item.description}</p>
                </ul>
              ))
            ) : (
              <p className='noJobFound'>😔 Oops, No story found.</p>
            )}

          </div>
        </div>



      </div>


    </div>
  )
}

export default ProductList
 