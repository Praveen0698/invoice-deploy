import React from "react";

const Table = ({ list }) => {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className="bg-purple-500 text-center text-white">
            <td className="font-bold">Item</td>
            <td className="font-bold">HSN/SAC</td>
            <td className="font-bold">QTY</td>
            <td className="font-bold">Unit</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr className="my-1 text-center" key={item.id}>
                <td>{item.item}</td>
                <td>{item.hsn}</td>
                <td>{item.qty}</td>
                <td>{item.unit}</td>
                <td>{item.price}</td>
                <td>{item.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
