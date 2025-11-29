import Course from './course';
import { useEffect, useState } from 'react';
function CourseList(){
    
    useEffect(()=>{
      fetch('http://localhost:3000/courses')
      .then(response=>{
        console.log(response);
        return response.json()
      }).then(data=>{SetCourse(data)})
      .catch((error)=>{
        console.log(error.message);
      })
    },[]);
    const [updateCourse,SetCourse]=useState(null);
   function DeleteCard(id){
    const updatedList=updateCourse.filter(courses=>courses.id!=id)
    SetCourse(updatedList);
   }
   if(!updateCourse){return <></>}
const coursesList = updateCourse.map((course,index) => (
  <Course 
    key={index}
    id={course.id}
    name={course.name} 
    image={course.image} 
    price={course.price} 
    delete={DeleteCard}
  />
));  
    return(
        <>
        {coursesList}
        </>
    );
}
export default CourseList;
//npx json-server --watch data/dummydata.json --port 3000 --static ./data
