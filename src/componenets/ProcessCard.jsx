import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function ProcessCard(props) {
  return (
    <Card className="mt-6 w-56 pt-3">
      <CardHeader color="blue-gray" className="relative mt-0.5 h-32">
        <img src={props.image} layout="fill" alt="img-blur-shadow" />
      </CardHeader>
      <CardBody>
        <Typography>{props.description}</Typography>
      </CardBody>
    </Card>
  );
}
