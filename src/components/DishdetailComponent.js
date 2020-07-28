import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";



function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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

const Dishdetail = (props) => {
    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
            </div>)
    } else {
        return <div></div>;
    }
}

export default Dishdetail;