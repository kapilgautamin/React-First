'use strict';
function SizeSelector(props){
  
  function sizeOptions(){
    return props.sizes.map(function(num){
      return (
        <option value={num} key={num}>
            {num}
        </option>
      );
    });
  }

  function onSizeChange(evt){
    console.log(evt.target.value);
    props.handleSizeChange(evt.target.value);
  }

  return (
    <div>
      <label htmlFor="size-options">Size: </label>
      <select defaultValue={props.size} name="size-options" onChange={onSizeChange}>
        {sizeOptions()}
      </select>
    </div>
  );
}

function ColorSelector(props){
  
  function colorOptions(){
    return props.colors.map(function(name){
      return (
        <option value={name} key={name}>
            {name}
        </option>
      );
    });
  }

  return (
    <div>
      <label htmlFor="color-options">Color: </label>
      <select defaultValue={props.color} name="color-options">
        {colorOptions()}
      </select>
    </div>
  );
}

function ProductImage(props){
  return <img src={`assets/${props.color}.jpg`} alt="Product Image" />;
}

function Product(props){
  var [size, setSize] = React.useState(9);
  var [color, setColor] = React.useState("red");
  var [colors, setColors] = React.useState(window.Inventory.allColors);
  var [sizes, setSizes] = React.useState(window.Inventory.allSizes);

  function handleSizeChange(selectedValue){
      setColors(window.Inventory.bySize[selectedValue]);
  }

  return (
    <div className="customizer">
      <div className="product-image">
        <ProductImage color={color}/>
      </div>
      <div className="selector">
        <SizeSelector size={size} sizes={sizes} handleSizeChange={handleSizeChange}/>
      </div>
      <div className="selector">
        <ColorSelector color={color} colors={colors}/>
      </div>
    </div>
  );
}

const domContainer = document.getElementById('react-root');

ReactDOM.render(<Product />, domContainer);