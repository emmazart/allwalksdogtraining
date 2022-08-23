import * as React from "react";
import styles from './service.module.css';
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import PetsIcon from '@mui/icons-material/Pets';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ListItemText } from "@mui/material";

function ServiceCard({ title, price, description, bullets }) {
  
    const theme = useTheme();
// handle asynchronysity of finding the props
  if (!bullets) return null;

  return (
    <Card sx={{ m: 3, minWidth: 275, display: 'flex', justifyContent: 'center' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography sx={{ fontSize: 24 }}>
          {price}
        </Typography>
        <List>
          {bullets.map((bullet, index) => {
            return (
              <ListItem key={index} sx={{ py: '3px' }}>
                <ListItemIcon> <PetsIcon /> </ListItemIcon>
                <ListItemText className={styles.listText}>{bullet}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;
