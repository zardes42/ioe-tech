import {useState} from 'react' ;
import CategoryItem from '../Category-Item/Category-Item';
import './Categories.css' ;


const Categories = ({onSort}) => {
    const data= [{id: 1, name:'Beauty',active : false} ,{id : 2,name:'Fashion',active : false} ,{id:3,name:'Gaming',active : false} ,{id:4, name:'Computing',active : false},{id:5 ,name:'Phones',active : false} ,{id:6, name:'All',active : true}];
    const [categories , setCategories] = useState(data) ;
    
  
    const addActive = (id) => {
        let cat = [...categories] ;
        cat.forEach((i) => {
            if (i.id === id){
                i.active = true ;
            }
            else{
                i.active = false ;
            }
          
        });
        setCategories(cat);

    }
    
    return ( 
    <div className='categories'>
        {categories.map((item) => <CategoryItem  onSort={onSort} key={item.id}addActive={addActive} item={item} />)}

    </div> );
}
 
export default Categories;