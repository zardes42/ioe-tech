import './Category-Item.css';


const CategoryItem = ({item ,addActive, onSort}) => {
  let  classes = item.active === true ? 'category active' : 'category' ;

    return ( 
        <div id={item.id} className={classes} onClick={() => {addActive(item.id); onSort(item.name)}}>{item.name}</div>
     );
}
 
export default CategoryItem;