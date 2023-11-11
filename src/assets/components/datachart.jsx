import { ResetTvOutlined } from "@mui/icons-material";
import React from "react";
const Datachart=()=>
{
    
  let  Datachart1=[
    {
        id:1,clinic_name:'الباطنية والقلب',new_pat:250,old_pat:300,total_cash:4500,
        total_comp:1500,
        total_forien:400 },
        {
            id:2,
            clinic_name:'الانف والاذن والحنجرة',
            new_pat:450,
            old_pat:400,
            total_cash:1000,
            total_comp:1200,
            total_forien:300,
        typep:"comp"},
            {
            id:3,
        clinic_name:'الطواريء',
        new_pat:150,
        old_pat:40,
        total_cash:700,
        total_comp:20,
        total_forien:40,
        typep:"naqd"},
       
        {
            id:4,
            
        clinic_name:'الاسنان',
        new_pat:250,
        old_pat:400,
        total_cash:700,
        total_comp:20,
        total_forien:40,
        typep:"comp1"},
        {
            id:5,
            
        clinic_name:'المخ والاعصاب',
        new_pat:270,
        old_pat:300,
        total_cash:700,
        total_comp:20,
        total_forien:40,
        typep:"comp1"},
        

        {
            id:6,
            
        clinic_name:'النساء والولادة',
        new_pat:120,
        old_pat:200,
        total_cash:700,
        total_comp:20,
        total_forien:40,
        typep:"comp1"}

   
];
return Datachart1;

};
export default Datachart; 