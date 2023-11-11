import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Divider, Typography } from "@mui/material";
//  const tr=[
//    {
//      id:1,
//      name:"hart",
//   type:   [{company:100,
//    private1:700}]
//   ,
//  total:type[company]+type[private1] },

//  ];
const clinics = [
  {
    id: 1,
    Acctype: "جديد",
    
    AccNo: 450,
  },
  {
    id: 2,
    Acctype: "مراجعة ",
    AccNo: 100,
  },
  {
    id:3,
    Acctype:"شركات",
    AccNo:50,
  }
  ,
  {
    id:4,
    Acctype:"داخلي",
    AccNo:10,
  },
  // {
  //   id: 4,
  //   Acctype: "عيادة المخ والاعصاب",
  //   AccNo: 30,
  // },
  // ,
  // {
  //   id: 5,
  //   Acctype: "عيادة النساء والولادة",
  //   AccNo: 30,
  // },
  // ,
  // {
  //   id: 6,
  //   Acctype: "عيادة الاسنان",
  //   AccNo: 30,
  // },

];

export default function Cards() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
      <Grid container spacing={3}>
        {clinics.map((acc) => (
          <Grid xs={12} md={3} key={acc.id}>
            <Box
              sx={{ marginTop: "12px" }}
              borderRadius={5}
              height={150}
              width
              boxShadow={3}
              padding={2}
            >
              <Typography  variant="body1" component="h3" gutterBottom>
                {acc.Acctype}
              </Typography>
              <Divider color="white" />

              <Typography
                variant="h3"
                align="center"
                p={2}
                component="h1"
                width
              >
                {acc.AccNo}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
  
}

// export default function Cards11() {
//   return (
//     <Box sx={{ flexGrow: 1, marginTop: "70px" }}>
//       <Grid container spacing={5}>
//         {tr.map((acc) => (
//           <Grid xs={12} md={3} key={tr.id}>
//             <Box
//               sx={{ marginTop: "12px" }}
//               borderRadius={5}
//               height={150}
//               width
//               boxShadow={3}
//               padding={2}
//             >
//               <Typography  variant="body1" component="h3" gutterBottom>
//                 {acc.type[company]}
//               </Typography>
//               <Divider color="white" />

//               <Typography
//                 variant="h3"
//                 align="center"
//                 p={2}
//                 component="h1"
//                 width
//               >
//                 {acc.total}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
