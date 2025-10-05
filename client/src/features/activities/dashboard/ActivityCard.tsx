import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate } from "react-router";

type Props = {
  activity: Activity
}


export default function ActivityCard({ activity }: Props) {

  const navigate = useNavigate();
  const { deleteActivity } = useActivities();

  return (
    <Card sx={{ borderRadius: 3, mb: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h5" fontWeight='bold' gutterBottom>{activity.title}</Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1 }} >{activity.date}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
        <Chip label={activity.category} variant="outlined" />
        <Box gap={3} display='flex'>
          <Button onClick={() => navigate(`${activity.id}`)} size='medium' variant="contained">View</Button>
          <Button
            onClick={() => deleteActivity.mutate(activity.id)}
            color="error"
            size='medium'
            variant="contained"
            loading={deleteActivity.isPending}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  )
}

