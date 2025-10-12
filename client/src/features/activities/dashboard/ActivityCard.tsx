import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material"
import { AccessTime, Place } from "@mui/icons-material";
import { Link } from "react-router";
import { formatDate } from "../../../lib/types/util/util";

type Props = {
  activity: Activity
}


export default function ActivityCard({ activity }: Props) {

  const isHost = false;
  const isGoing = false;
  const label = isHost ? 'You are hosting this activity' : isGoing ? 'You are going to this activity' : '';
  const isCancelled = false;
  const color = isCancelled ? 'error' : isHost ? 'primary' : isGoing ? 'warning' : 'default';

  return (
    <Card sx={{ borderRadius: 3, mb: 2, p: 2 }} elevation={3}>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          slotprops={{
            variant: 'h5',
            fontWeight: 'bold',
            fontSize: 20
          }}
          subheader={
            <>
              Hosted by{' '}<Link to={'/profiles/bob'}>Bob</Link>
            </>
          }
        />
        <Box display={'flex'} flexDirection='column' gap={2} sx={{ mr: 2 }}>
          {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
          {isCancelled && <Chip label='Cancelled' color='error' sx={{ borderRadius: 2 }} />}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ pt: 0 }}>
        <Box display='flex' alignItems='center' px={2} mb={2}>
          <Box display='flex' alignItems='center' flexGrow={0}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>{formatDate(activity.date)}
            </Typography>
          </Box>
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">
            {activity.venue}
          </Typography>
        </Box>
        <Divider />
        <Box display='flex' gap={2} sx={{ backgroundColor: 'grey.200', py: 3, pl: 2 }}>
          Attendies go here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2">
          {activity.description}
        </Typography>
        <Button
          component={Link}
          to={`/activities/${activity.id}`}
          size='medium'
          variant="contained"
          sx={{ display: 'flex', justifySelf: 'self-end', borderRadius: 3 }}>
          View
        </Button>
      </CardContent>
    </Card>
  )
}

