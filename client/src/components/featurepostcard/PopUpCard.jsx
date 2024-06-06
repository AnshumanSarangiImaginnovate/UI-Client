import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  CardHeader,
  Box,
} from "@mui/material";

export const PopUpCard = () => {
  const posts = [
    {
      index: 1,
      name: "Learning React",
      date: "June 5, 2024",
      imageUrl:
        "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "/learning-react",
      description: "A comprehensive guide to learning React from scratch.",
    },
    {
      index: 2,
      name: "Advanced JavaScript",
      date: "June 6, 2024",
      imageUrl:
        "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "/advanced-javascript",
      description: "Take your JavaScript skills to the next level.",
    },
    {
      index: 3,
      name: "Web Development Bootcamp",
      date: "June 7, 2024",
      imageUrl:
        "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      slug: "/web-development-bootcamp",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sapiente, neque placeat illum nostrum alias et debitis repellendus quia minus sunt earum soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magni ad mollitia, recusandae cupiditate at quibusdam tempora molestias dolorem, quaerat facilis nemo laborum.",
    },
  ];

  return (
    <Grid container spacing={3} sx={{ marginTop: 4 }}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.index}>
          <Card
            sx={{
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              margin: 2,
              height: 500,
              //   maxWidth: 350,
              "&:hover .MuiCardMedia-root": {
                transform: "scale(1.1)",
              },
              "&:hover .layer": {
                height: "65%",
              },
              "&:hover .description": {
                opacity: 1,
              },
            }}
          >
            <CardMedia
              component="img"
              image="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={post.name}
              sx={{
                width: "100%",
                borderRadius: 2,
                display: "block",
                transition: "transform 0.5s",
              }}
            />
            <Box
              className="layer"
              sx={{
                width: "100%",
                height: "45%",
                background: "linear-gradient(rgba(0,0,0,0.6),#0080FF)",
                borderRadius: 2,
                position: "absolute",
                left: 0,
                bottom: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                padding: 2,
                textAlign: "center",
                transition: "height 0.5s",
              }}
            >
              <CardHeader
                title={post.name}
                subheader={post.date}
                sx={{ height: 130, color: "white" }}
                titleTypographyProps={{ variant: "h6" }}
                subheaderTypographyProps={{ variant: "body1" }}
              />
              <CardContent
                className="description"
                sx={{
                  opacity: 0,
                  transition: "opacity 0.5s",
                  color: "white",
                }}
              >
                <Typography>{post.description}</Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
//   CardHeader,
//   Box,
// } from "@mui/material";

// export const PopUpCard = () => {
//   const posts = [
//     {
//       index: 1,
//       name: "Learning React",
//       date: "June 5, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/learning-react",
//       description: "A comprehensive guide to learning React from scratch.",
//     },
//     {
//       index: 2,
//       name: "Advanced JavaScript",
//       date: "June 6, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/advanced-javascript",
//       description: "Take your JavaScript skills to the next level.",
//     },
//     {
//       index: 3,
//       name: "Web Development Bootcamp",
//       date: "June 7, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/web-development-bootcamp",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sapiente, neque placeat illum nostrum alias et debitis repellendus quia minus sunt earum soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magni ad mollitia, recusandae cupiditate at quibusdam tempora molestias dolorem, quaerat facilis nemo laborum.",
//     },
//   ];

//   return (
//     <Grid container spacing={3} sx={{ marginTop: 4 }}>
//       {posts.map((post) => (
//         <Grid item xs={12} sm={6} md={4} key={post.index}>
//           <Card
//             sx={{
//               borderRadius: 2,
//               position: "relative",
//               overflow: "hidden",
//               margin: 2,
//               height: 500,
//               maxWidth: 350,
//               "&:hover .MuiCardMedia-root": {
//                 transform: "scale(1.1)",
//               },
//               "&:hover .layer": {
//                 height: "65%",
//               },
//             }}
//           >
//             <CardMedia
//               component="img"
//               image="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt={post.name}
//               sx={{
//                 width: "100%",
//                 borderRadius: 2,
//                 display: "block",
//                 transition: "transform 0.5s",
//               }}
//             />
//             <Box
//               className="layer"
//               sx={{
//                 width: "100%",
//                 height: "45%",
//                 background: "linear-gradient(rgba(0,0,0,0.6),#0080FF)",
//                 borderRadius: 2,
//                 position: "absolute",
//                 left: 0,
//                 bottom: 0,
//                 overflow: "hidden",
//                 display: "flex",
//                 // justifyContent: "center",
//                 flexDirection: "column",
//                 padding: 2,
//                 textAlign: "center",
//                 transition: "height 0.5s",
//               }}
//             >
//               <CardHeader
//                 title={post.name}
//                 subheader={post.date}
//                 sx={{ height: 130, color: "white" }}
//                 titleTypographyProps={{ variant: "h6" }}
//                 subheaderTypographyProps={{ variant: "body1" }}
//               />
//               <CardContent>
//                 <Typography sx={{ color: "white" }}>
//                   {post.description}
//                 </Typography>
//               </CardContent>
//             </Box>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// import React from "react";
// import "./PopUpCard.scss";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
//   Grid,
//   CardHeader,
//   Box,
// } from "@mui/material";

// export const PopUpCard = () => {
//   const posts = [
//     {
//       index: 1,
//       name: "Learning React",
//       date: "June 5, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/learning-react",
//       description: "A comprehensive guide to learning React from scratch.",
//     },
//     {
//       index: 2,
//       name: "Advanced JavaScript",
//       date: "June 6, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/advanced-javascript",
//       description: "Take your JavaScript skills to the next level.",
//     },
//     {
//       index: 3,
//       name: "Web Development Bootcamp",
//       date: "June 7, 2024",
//       imageUrl:
//         "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       slug: "/web-development-bootcamp",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, sapiente, neque placeat illum nostrum alias et debitis repellendus quia minus sunt earum soluta.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum magni ad mollitia, recusandae cupiditate at quibusdam tempora molestias dolorem, quaerat facilis nemo laborum.",
//     },
//   ];
//   return (
//     <Grid spacing={3} direction={"row"}>
//       {posts.map((post) => (
//         <Grid className="work-list" direction={"row"} key={post.index}>
//           <Card
//             className="work"
//             sx={{
//               height: 500,
//               maxWidth: 350,
//             }}
//           >
//             <img
//               src="https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//             />
//             <Box className="layer">
//               <CardHeader
//                 title={post.name}
//                 sx={{ height: 130 }}
//                 titleTypographyProps={{ variant: "h6" }}
//                 subheader={post.date}
//                 subheaderTypographyProps={{ variant: "body1" }}
//               />
//               <Typography>{post.description}</Typography>
//             </Box>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };
