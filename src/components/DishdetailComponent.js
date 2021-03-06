import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

function RenderComments({ comments }) {
    if (comments === null) {
        return (<div></div>)
    } else {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div className="list-unstyled">
                    {comments.map(comment => {
                        return (
                            <li key={comment.id}>
                                {comment.comment}
                                <br />
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    })}

                </div>
            </div>
        )
    }
}

const DishDetail = (props) => {
    return (
        props.dish === null || props.dish === undefined ?
            <div></div>
            :
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
    )
}

export default DishDetail;