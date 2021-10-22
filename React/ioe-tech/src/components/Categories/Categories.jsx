import CategoryItem from '../Category-Item/Category-Item';
import './Categories.css' ;


const Categories = ({Categories , onSort,sortBy}) => {      
    return ( 
    <div className='categories'>
        {Categories.map(item => <CategoryItem sortBy={sortBy} key={item} onSort={onSort}  item={item} />)}

    </div> );
}
 
export default Categories;