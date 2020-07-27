import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" object src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments) {
            const dishComments = comments.map(foundComment => {
                const dateFormatted = dateFormat(foundComment.date, "mediumDate");
                return (
                    <li>
                        <p>{foundComment.comment}</p>
                        <p>-- {foundComment.author}, {dateFormatted}</p>
                    </li>
                )
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dishComments}
                    </ul>
                </div>
            );
        } else {
            return <div></div>
        }
    }

    render() {
        if (this.props.dish) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.dish.comments)}
                        </div>
                    </div>
                </div>)
        } else {
            return <div></div>;
        }
    }
}

export default Dishdetail;