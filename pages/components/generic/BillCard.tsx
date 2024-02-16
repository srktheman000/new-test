import React from "react";
import Text from "../ui/Text";
import Button from "../ui/Button";
import RightIcon from "../Icons/RightIcon";
import TextTag from "../ui/TextTag";
import CostCard from "../ui/CostCard";

const BillCard = ({ plan }: any) => {
  return (
    <div className='border border-gray-300 rounded-lg overflow-hidden shadow-md mb-4'>
      <div className='flex justify-around my-4'>
        <div>
          <img
            src='https://devcore02.cimet.io/uploads/providers_logo/6_AlintaEnergy.png'
            alt='Provider Logo'
            className='h-24 w-auto mb-2'
          />
          <Text variant='primary' className='text-lg'>
            Alinta Energy
          </Text>
        </div>
        <div className='flex flex-wrap space-x-2  max-w-[50%]'>
          <TextTag>Chip 1</TextTag>
          <TextTag> HOMEDEAL Electricity Rate Only</TextTag>
          <TextTag> HOMEDEAL Electricity Rate Only</TextTag>
          <TextTag> HOMEDEAL Electricity Rate Only</TextTag>
          <TextTag> HOMEDEAL Electricity Rate Only</TextTag>
          <TextTag> HOMEDEAL Electricity Rate Only</TextTag>
        </div>

        <CostCard yearCost={50} monthCost={20} />
      </div>
      <div className='flex justify-between items-center px-8 my-4'>
        <Text variant='secondary'>
          Under Alinta Energy's Home Deal plan you will pay Alinta Energy's
          applicable market tariffs and charges. The tariffs may be varied at
          anytime. Alinta Energy will give you notice of any price variations in
          accordance with applicable laws.
        </Text>
      </div>
      <div className='bg-gray-200 rounded-b-lg p-4  px-8 flex justify-between items-center '>
        <div>
          <Text variant='secondary'>
            This offer is only available to residential customers with an
            applicable network tariff, eligibility criteria applies. Customers
            should refer to the Department of Environment and Primary Industries
            website at www.dpi.gov.au to determine their Solar Feed-in Tariff
            scheme and solar eligibility requirements. Alinta Energy reserve the
            <a
              href='http://www.alintaenergy.com.au'
              target='_blank'
              rel='noopener noreferrer'
            >
              Alinta Energy
            </a>{" "}
            or call on 133 702. For information about choosing an energy
            retailer visit energymadeeasy.gov.au.
          </Text>
        </div>

        <Button
          onClick={() =>
            window.open(
              "https://core-cimet-dev.s3.ap-southeast-2.amazonaws.com/Providers_Plans/Energy_Locals/Local_Saver_-_NSW/NSW_Resi%20Elec_Local%20Saver_74061571280751.pdf",
              "_blank"
            )
          }
          className='text-sm bg-blue-900 w-[50%] mx-2'
        >
          Connect Online Today
        </Button>
      </div>
    </div>
  );
};

export default BillCard;
