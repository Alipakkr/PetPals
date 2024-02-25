import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { UserCard } from './UserCard'
import { PostCard } from './PostCard'
import { DogsCard } from "./DogsCard"
import { CatsCard } from "./CatsCard"
import { FaDog, FaUserAlt, FaCat, } from "react-icons/fa"
import { FaRightFromBracket } from "react-icons/fa6"
import { Contribute } from './Contribute'
import { adminContext } from '../context/AdminAuthContext'

export const AdminHomePage = () => {
  const toast = useToast()
  // const { adminLogoutFunc } = useContext(adminContext)
  const [users, setUsers] = useState([])
  const [userState, setUserState] = useState(false)
  const [posts, setPosts] = useState([])
  const [postsState, setPostsState] = useState(false)
  const [dogs, setDogs] = useState([])
  const [DogsState, setDogsState] = useState(false)
  const [Cats, setCats] = useState([])
  const [CatsState, setCatsState] = useState(false)
  const [formState, setFormState] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = useState(1)

  useEffect(() => {
    // getUserData()
    // setUserState(true)
  }, [])

  let getUserData = () => {
    axios.get("https://cute-erin-tick-hat.cyclic.cloud/admin/users")
      .then((res) => {
        setUsers([])
      })
      .catch((err) => console.log(err))
  }
  let getPostData = () => {
    axios.get("https://cute-erin-tick-hat.cyclic.cloud/admin/forms")
      .then((res) => {
        setPosts([])
      })
      .catch((err) => console.log(err))
  }

  let handleClickUsers = () => {
    setUserState(!userState)
    setPostsState(false)
    setDogsState(false)
    setCatsState(false)
    setFormState(false)
    getUserData()
  }

  let handleClickPosts = () => {
    setUserState(false)
    setDogsState(false)
    setCatsState(false)
    setFormState(false)
    setPostsState(!postsState)
    getPostData()
  }

  let handleBlockUSer = (id) => {
    axios.post(`https://cute-erin-tick-hat.cyclic.cloud/admin/block/${id}`)
      .then((res) => {
        getUserData()
        toast({
          title: 'User Successfully Blocked',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
      })
      .catch((err) => console.log(err))
  }

  let getDogsData = () => {
    axios.get(`https://cute-erin-tick-hat.cyclic.cloud/dogs/get?page=${currentPage}&limit=10`)
      .then((res) => {
        setDogs(res.data.dogs)
      })
      .catch((err) => console.log(err))
  }
  var handleDogsData = () => {
    setDogsState(!DogsState)
    setUserState(false)
    setPostsState(false)
    setCatsState(false)
    setFormState(false)
    getDogsData()
  }
  // Function to handle "Next" button click
  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    getDogsData()
  };

  // Function to handle "Previous" button click
  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    getDogsData()
  };

  let getCatsData = () => {
    axios.get(`https://cute-erin-tick-hat.cyclic.cloud/cats/get?page=${page}&limit=10`)
      .then((res) => {
        setCats(res.data.cats)
      })
      .catch((err) => console.log(err))
  }
  const handleCatsNext = () => {
    setPage((prev) => prev + 1);
    getCatsData()
  };
  // Function to handle "Previous" button click
  const handleCatsPrevious = () => {
    setPage((prev) => prev - 1);
    getCatsData()
  };
  const DeleteDogsData = (id) => {
    axios.delete(`https://cute-erin-tick-hat.cyclic.cloud/dogs/delete/${id}`)
      .then((res) => {
        toast({
          title: 'Data Deleted',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        getDogsData()
      })
  }
  const DeleteCatsData = (id) => {
    axios.delete(`https://cute-erin-tick-hat.cyclic.cloud/Cats/delete/${id}`)
      .then((res) => {
        toast({
          title: 'Data Deleted',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        getCatsData()
      })
  }

  let handleCatsData = () => {
    setDogsState(false)
    setUserState(false)
    setPostsState(false)
    setFormState(false)
    setCatsState(!CatsState)
    getCatsData()
  }

  let handleFormState = () => {
    setDogsState(false)
    setUserState(false)
    setPostsState(false)
    setCatsState(false)
    setFormState(!formState)
  }

  let handleReject = (id) => {
    axios.delete(`https://cute-erin-tick-hat.cyclic.cloud/post/delete/${id}`)
      .then((res) => {
        toast({
          title: 'Request Rejected',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
        getPostData()
      })
  }

  let handleApprove = (id) => {
    axios.patch(`https://cute-erin-tick-hat.cyclic.cloud/post/patch/${id}`)
      .then((res) => {
        toast({
          title: 'Request Approved',
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        getPostData()
      })
  }

  let handleLogout = () => {
    adminLogoutFunc()
  }

  return (
    <div style={{ backgroundColor: "#ffffff", paddingTop: "70px" }}>

      <Flex alignItems={"center"} height="100px" bg="#dccbd5">
        <Flex justifyContent={"space-around"} w="80%" >

          <Button _hover={{ borderRadius: "25px", bg: "#e3e8e6" }} borderRadius={"none"} outline={"none"} bg="#dccbd5" onClick={handleClickUsers}>Users</Button>
          <Button _hover={{ borderRadius: "25px", bg: "#e3e8e6" }} borderRadius={"none"} outline={"none"} bg="#dccbd5" onClick={handleClickPosts}>Requests</Button>
          <Button _hover={{ borderRadius: "25px", bg: "#e3e8e6" }} borderRadius={"none"} outline={"none"} bg="#dccbd5" onClick={handleDogsData}>Dog's Data</Button>
          <Button _hover={{ borderRadius: "25px", bg: "#e3e8e6" }} borderRadius={"none"} outline={"none"} bg="#dccbd5" onClick={handleCatsData}>Cat's Data</Button>
          <Button _hover={{ borderRadius: "25px", bg: "#e3e8e6" }} borderRadius={"none"} outline={"none"} bg="#dccbd5" onClick={handleFormState}>Add Data</Button>

        </Flex>

        <Button ml="170px" w="4%" borderRadius={"25px"} colorScheme='red' onClick={handleLogout}> <FaRightFromBracket /> </Button>

      </Flex>


      {userState && <div style={{ marginTop: "40px" }}>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="18px">
          <FaUserAlt style={{ height: "50px", width: "50px" }} />
          <h1 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "15px" }}> Users Data</h1>
        </Box>
        <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px" >
          {
            users.map((ele) => (


              <Box padding="10px">
                <UserCard {...ele} handleBlockUSer={handleBlockUSer} />
              </Box>

            ))
          }
        </Box>
      </div>
      }


      {
        postsState && <div style={{ marginTop: "40px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Request Data</h1>
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr 1fr"} gap="20px" mt="45px"  >

            {
              posts.map((ele) => (
                <div>
                  <PostCard {...ele} handleReject={handleReject} handleApprove={handleApprove} />
                </div>
              ))
            }
          </Box>
        </div>
      }

      {
        DogsState && <div style={{ marginTop: "40px" }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="18px">
            <FaDog style={{ height: "50px", width: "50px" }} />
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "15px" }}> Dogs Data</h1>
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr "} gap="20px" mt="45px"  >

            {
              dogs.map((ele) => (
                <div>
                  <DogsCard {...ele} DeleteDogsData={DeleteDogsData} />
                </div>
              ))
            }
          </Box>
        </div>
      }

      {
        CatsState && <div style={{ marginTop: "40px" }}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap="18px">
            <FaCat style={{ height: "50px", width: "50px" }} />
            <h1 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "15px" }}> Cats Data</h1>
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr "} gap="20px" mt="45px"  >

            {
              Cats.map((ele) => (
                <div>
                  <CatsCard {...ele} DeleteCatsData={DeleteCatsData} />
                </div>
              ))
            }
          </Box>

        </div>
      }

      {
        formState && <Contribute />
      }

    </div>
  )
}
