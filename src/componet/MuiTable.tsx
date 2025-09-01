import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  const tableData = [
    {
      id: 1,
      first_name: "Sallee",
      last_name: "Scrace",
      email: "sscrace0@shutterfly.com",
      gender: "Female",
      ip_address: "211.77.217.66",
    },
    {
      id: 2,
      first_name: "Corty",
      last_name: "Kingman",
      email: "ckingman1@umich.edu",
      gender: "Male",
      ip_address: "230.160.125.97",
    },
    {
      id: 3,
      first_name: "Cyndia",
      last_name: "Neathway",
      email: "cneathway2@arizona.edu",
      gender: "Female",
      ip_address: "154.220.247.87",
    },
    {
      id: 4,
      first_name: "Roy",
      last_name: "Smewing",
      email: "rsmewing3@mlb.com",
      gender: "Male",
      ip_address: "212.133.14.163",
    },
    {
      id: 5,
      first_name: "Elysha",
      last_name: "Thacke",
      email: "ethacke4@slashdot.org",
      gender: "Genderfluid",
      ip_address: "29.101.252.18",
    },
    {
      id: 6,
      first_name: "Jeromy",
      last_name: "Gahan",
      email: "jgahan5@unesco.org",
      gender: "Male",
      ip_address: "46.139.191.246",
    },
    {
      id: 7,
      first_name: "Brandtr",
      last_name: "Benneyworth",
      email: "bbenneyworth6@blinklist.com",
      gender: "Male",
      ip_address: "17.57.212.171",
    },
    {
      id: 8,
      first_name: "Kalli",
      last_name: "Pavlik",
      email: "kpavlik7@bing.com",
      gender: "Genderqueer",
      ip_address: "17.12.11.205",
    },
    {
      id: 9,
      first_name: "Julie",
      last_name: "Bockings",
      email: "jbockings8@chron.com",
      gender: "Male",
      ip_address: "77.227.49.156",
    },
    {
      id: 10,
      first_name: "Leonid",
      last_name: "Springham",
      email: "lspringham9@reverbnation.com",
      gender: "Male",
      ip_address: "158.86.219.51",
    },
  ];
  return (
    <TableContainer component={Paper} sx={{maxHeight:'300px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
