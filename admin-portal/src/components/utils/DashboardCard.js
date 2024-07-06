import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Icon,
  CardHeader,
  Divider,
  Box,
} from "@mui/material";
import {
  AddBoxOutlined,
  Description,
  Settings,
  Person,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const DashboardCard = ({ title, icon, page }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardHeader title={title} style={{ textAlign: "center" }} />
      <Divider />
      {/* <CardContent> */}
      {/* <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography> */}
      {/* <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <img src={icon} alt="Company Logo" style={{ maxWidth: "100%" }} />
        </Box>
      </CardContent> */}
      <CardActions
        onClick={() => {
          navigate("/" + page);
        }}
        sx={{ padding: 2, display: "flex", justifyContent: "center" }}
      >
        <Button>
          <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
            <img src={icon} alt="Company Logo" style={{ maxWidth: "100%" }} />
          </Box>
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardCard;
