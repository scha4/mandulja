import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function CardData(props) {
  return (
    <Card className="w-52 h-auto mt-4">
      <CardBody>
        {props.icon}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.name}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardBody>
    </Card>
  );
}
