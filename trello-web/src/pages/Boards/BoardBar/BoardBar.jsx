import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLES = {
  textTransform: "capitalize",
  color: "#fff",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
  "&:hover": {
    bgcolor: "#fff",
  },
};

const BoardBar = ({ board }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        paddingX: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label={board?.type}
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "#fff",
            borderColor: "#fff",
            "&:hover": { borderColor: "#fff" },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={3}
          sx={{
            gap: "10px",

            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none ",
              color: "#fff",
              cursor: "pointer",
              "&:first-of-type": { bgcolor: "#a4b0be" },
            },
          }}
        >
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
          <Tooltip title="Tuan Kiet">
            <Avatar
              alt="Tuan Kiet"
              src="
            https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/371540884_1501605143918561_9092157103827329968_n.jpg?stp=dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=4gPTv2XxeicAX-9Loqz&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfArWnJbL49JIDxAtF8lZRtm9uLgWi8A609QrH4n35k_MQ&oe=650DC33B
            "
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default BoardBar;
