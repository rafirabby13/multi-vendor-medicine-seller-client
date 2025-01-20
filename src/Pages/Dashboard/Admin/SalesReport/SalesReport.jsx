/* eslint-disable no-unused-vars */

import useTotalPayment from "../../../../hooks/useTotalPayment.jsx";

import DataTable, { defaultThemes } from "react-data-table-component";

const SalesReport = () => {
  const [totalPaid] = useTotalPayment();
  console.log(totalPaid);
  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          backgroundColor: "mintcream",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };
  function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ",";
    const lineDelimiter = "\n";
    const keys = Object.keys(array[0]);

    result = "";
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach((item) => {
      let ctr = 0;
      keys.forEach((key) => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }
  function downloadCSV(array) {
    const link = document.createElement("a");
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = "export.csv";

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute("href", encodeURI(csv));
    link.setAttribute("download", filename);
    link.click();
  }
  const columns = [
    {
      name: "TransactionId",
      selector: (row) => row.transactionId,
      sortable: true,
      style: (row) => ({ backgroundColor: "#ff33" }),
    },
    {
      name: "Seller Email",
      selector: (row) => row.sellerEmail,
      sortable: true,
    },
    {
      name: "Buyer Email",
      selector: (row) => row.buyerEmail,
      sortable: true,
    },
    {
      name: "Total Price",
      selector: (row) => row.totalPrice,
      sortable: true,
    },
    {
      name: "Payment Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const exportCSV = () => {
    if (totalPaid?.length) {
      downloadCSV(totalPaid);
    } else {
      alert("No data available to export.");
    }
  };

  return (
    <div>
      <div className="flex lg:justify-end justify-start">
        <div></div>
        <div>
          <button className="btn bg-btns text-background text-xl" onClick={exportCSV}>Export</button>
        </div>
      </div>
      <div className="divider"></div>
      <DataTable
        columns={columns}
        data={totalPaid}
        customStyles={customStyles}
       
      />
    </div>
  );
};

export default SalesReport;
