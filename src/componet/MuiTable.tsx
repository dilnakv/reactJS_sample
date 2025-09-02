import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

export const MuiTable = () => {
  const tableData = [
    {
      id: 1,
      first_name: "Aaren",
      last_name: "Currum",
      email: "acurrum0@census.gov",
      gender: "Female",
      ip_address: "83.124.152.169",
    },
    {
      id: 2,
      first_name: "Mirella",
      last_name: "Norvell",
      email: "mnorvell1@kickstarter.com",
      gender: "Female",
      ip_address: "247.229.203.142",
    },
    {
      id: 3,
      first_name: "Peggie",
      last_name: "Dorcey",
      email: "pdorcey2@apple.com",
      gender: "Polygender",
      ip_address: "180.208.215.87",
    },
    {
      id: 4,
      first_name: "Adlai",
      last_name: "Mattusov",
      email: "amattusov3@boston.com",
      gender: "Genderfluid",
      ip_address: "175.223.173.122",
    },
    {
      id: 5,
      first_name: "Vinnie",
      last_name: "Dullingham",
      email: "vdullingham4@washington.edu",
      gender: "Agender",
      ip_address: "109.188.24.247",
    },
    {
      id: 6,
      first_name: "Julissa",
      last_name: "Matyas",
      email: "jmatyas5@pagesperso-orange.fr",
      gender: "Female",
      ip_address: "184.62.4.218",
    },
    {
      id: 7,
      first_name: "Evangelin",
      last_name: "Torre",
      email: "etorre6@kickstarter.com",
      gender: "Female",
      ip_address: "9.159.183.6",
    },
    {
      id: 8,
      first_name: "Kristina",
      last_name: "Zieme",
      email: "kzieme7@guardian.co.uk",
      gender: "Female",
      ip_address: "30.93.225.240",
    },
    {
      id: 9,
      first_name: "Corena",
      last_name: "Athelstan",
      email: "cathelstan8@liveinternet.ru",
      gender: "Female",
      ip_address: "70.99.102.110",
    },
    {
      id: 10,
      first_name: "Lurline",
      last_name: "Joynt",
      email: "ljoynt9@seattletimes.com",
      gender: "Female",
      ip_address: "225.2.154.112",
    },
    {
      id: 11,
      first_name: "Martica",
      last_name: "Staddom",
      email: "mstaddoma@chron.com",
      gender: "Female",
      ip_address: "162.56.94.202",
    },
    {
      id: 12,
      first_name: "Tristam",
      last_name: "McCurry",
      email: "tmccurryb@whitehouse.gov",
      gender: "Male",
      ip_address: "49.91.37.77",
    },
    {
      id: 13,
      first_name: "Cleve",
      last_name: "Lougheed",
      email: "clougheedc@php.net",
      gender: "Male",
      ip_address: "173.11.173.221",
    },
    {
      id: 14,
      first_name: "Cathy",
      last_name: "Sinfield",
      email: "csinfieldd@squidoo.com",
      gender: "Female",
      ip_address: "178.205.232.199",
    },
    {
      id: 15,
      first_name: "Gardy",
      last_name: "Salliere",
      email: "gsallieree@amazon.com",
      gender: "Polygender",
      ip_address: "134.170.43.245",
    },
    {
      id: 16,
      first_name: "Jule",
      last_name: "Stanley",
      email: "jstanleyf@blogtalkradio.com",
      gender: "Male",
      ip_address: "148.111.179.178",
    },
    {
      id: 17,
      first_name: "Lauren",
      last_name: "Silburn",
      email: "lsilburng@reuters.com",
      gender: "Female",
      ip_address: "245.10.43.14",
    },
    {
      id: 18,
      first_name: "Trstram",
      last_name: "Feasby",
      email: "tfeasbyh@sfgate.com",
      gender: "Male",
      ip_address: "162.163.135.64",
    },
    {
      id: 19,
      first_name: "Janaye",
      last_name: "Laurance",
      email: "jlaurancei@auda.org.au",
      gender: "Female",
      ip_address: "79.24.199.236",
    },
    {
      id: 20,
      first_name: "Rube",
      last_name: "Blamphin",
      email: "rblamphinj@t-online.de",
      gender: "Male",
      ip_address: "153.234.116.34",
    },
    {
      id: 21,
      first_name: "Kellia",
      last_name: "Surr",
      email: "ksurrk@tiny.cc",
      gender: "Female",
      ip_address: "218.125.149.59",
    },
    {
      id: 22,
      first_name: "Bamby",
      last_name: "Dyas",
      email: "bdyasl@bandcamp.com",
      gender: "Female",
      ip_address: "225.22.168.105",
    },
    {
      id: 23,
      first_name: "Beverie",
      last_name: "Garms",
      email: "bgarmsm@hubpages.com",
      gender: "Female",
      ip_address: "61.117.98.20",
    },
    {
      id: 24,
      first_name: "Briggs",
      last_name: "Few",
      email: "bfewn@google.pl",
      gender: "Male",
      ip_address: "52.77.11.224",
    },
    {
      id: 25,
      first_name: "Yehudit",
      last_name: "Beckey",
      email: "ybeckeyo@virginia.edu",
      gender: "Male",
      ip_address: "176.214.251.88",
    },
    {
      id: 26,
      first_name: "Aleta",
      last_name: "Grimditch",
      email: "agrimditchp@nbcnews.com",
      gender: "Female",
      ip_address: "136.167.46.37",
    },
    {
      id: 27,
      first_name: "Isacco",
      last_name: "Maggorini",
      email: "imaggoriniq@macromedia.com",
      gender: "Male",
      ip_address: "161.2.236.142",
    },
    {
      id: 28,
      first_name: "Olav",
      last_name: "Cuardall",
      email: "ocuardallr@forbes.com",
      gender: "Male",
      ip_address: "193.183.2.51",
    },
    {
      id: 29,
      first_name: "Horst",
      last_name: "Gedling",
      email: "hgedlings@163.com",
      gender: "Non-binary",
      ip_address: "149.213.238.44",
    },
    {
      id: 30,
      first_name: "Debee",
      last_name: "Paydon",
      email: "dpaydont@whitehouse.gov",
      gender: "Female",
      ip_address: "130.76.203.75",
    },
    {
      id: 31,
      first_name: "Rodolph",
      last_name: "Matthaus",
      email: "rmatthausu@businessweek.com",
      gender: "Male",
      ip_address: "82.187.114.58",
    },
    {
      id: 32,
      first_name: "Thain",
      last_name: "Pierton",
      email: "tpiertonv@symantec.com",
      gender: "Male",
      ip_address: "95.220.99.216",
    },
    {
      id: 33,
      first_name: "Marja",
      last_name: "Payn",
      email: "mpaynw@accuweather.com",
      gender: "Female",
      ip_address: "111.179.180.158",
    },
    {
      id: 34,
      first_name: "Ashleigh",
      last_name: "MacRory",
      email: "amacroryx@about.me",
      gender: "Female",
      ip_address: "134.36.235.168",
    },
    {
      id: 35,
      first_name: "Davida",
      last_name: "Totterdell",
      email: "dtotterdelly@marriott.com",
      gender: "Female",
      ip_address: "0.70.57.206",
    },
    {
      id: 36,
      first_name: "Agna",
      last_name: "Isacsson",
      email: "aisacssonz@wikipedia.org",
      gender: "Female",
      ip_address: "227.165.68.37",
    },
    {
      id: 37,
      first_name: "Henrik",
      last_name: "Meneely",
      email: "hmeneely10@hugedomains.com",
      gender: "Male",
      ip_address: "166.220.133.13",
    },
    {
      id: 38,
      first_name: "Gerianna",
      last_name: "Vost",
      email: "gvost11@jalbum.net",
      gender: "Female",
      ip_address: "171.59.161.189",
    },
    {
      id: 39,
      first_name: "Lanny",
      last_name: "Honeyghan",
      email: "lhoneyghan12@omniture.com",
      gender: "Male",
      ip_address: "154.77.11.74",
    },
    {
      id: 40,
      first_name: "Blakelee",
      last_name: "Yurkin",
      email: "byurkin13@mozilla.com",
      gender: "Female",
      ip_address: "33.22.110.52",
    },
  ];

  // pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // handlers
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0); // reset to first page
  };

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
