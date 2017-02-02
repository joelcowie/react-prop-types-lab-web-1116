const React = require('react');

class Product extends React.Component {
  render() {
    return (
      <div className = "product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function(props){
    var weight = props.weight

    if ((weight < 80) || (weight > 300)) {
      return new Error ("weight must be between 80 and 300")
    }

    if (weight === undefined) {
      return new Error ("weight cannot be blank")
    }

    if (isNaN(weight)) {
      return new Error ("weight must be a number")
    }

    }
  }


module.exports = Product;
