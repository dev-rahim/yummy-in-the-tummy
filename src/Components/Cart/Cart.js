import './Cart.css'
const cart = (props) => {
    // console.log(props.mealTitle);

    return (
        <div className='Cart'>
            <h3>Added To Favorite</h3>
            <ol>
                {
                    props.mealTitle.map(title => <li>{title}</li>)
                }
            </ol>
        </div>
    );
};

export default cart;