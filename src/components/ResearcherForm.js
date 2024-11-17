import React from 'react';
import Input from './Input';
import Button from './Button';

const ResearcherForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        label="Wallet Address"
        name="walletAddress"
        value={formData.walletAddress}
        onChange={onChange}
        placeholder="Enter your wallet address"
      />
      <Input
        label="Public Key (Hash)"
        name="publicKeyHash"
        value={formData.publicKeyHash}
        onChange={onChange}
        placeholder="Enter your public key hash"
      />
      <Input
        label="Institution Name"
        name="institutionName"
        value={formData.institutionName}
        onChange={onChange}
        placeholder="Enter your institution name"
      />
      <Input
        label="Verification Status"
        value="Pending"
        readOnly
      />
      <Input
        label="Active Status"
        value="Active"
        readOnly
      />
      <Button type="submit" label="Submit Registration" />
    </form>
  );
};

export default ResearcherForm;
