import './Category-Item.css';


const CategoryItem = ({item , onSort, sortBy}) => {
  let  classes = sortBy === item ? 'category active' : 'category' ;

    return ( 
        <div id={item} className={classes} onClick={() => {onSort(item)}}>{item}</div>
     );
}
 
export default CategoryItem;