import { Address } from './address';
import { Company } from './company';

export class User {

  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: Address;
  public phone: string;
  public website: string;
  public company: Company;

  public getId(): number {
    return this.id;
  }
  public setId(id: number) {
    this.id = id;
    return this;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
    return this;
  }
  public getUsername(): string {
    return this.username;
  }
  public setUsername(username: string) {
    this.username = username;
    return this;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string) {
    this.email = email;
    return this;
  }
  public getAddress(): Address {
    return this.address;
  }
  public setAddress(address: Address) {
    this.address = address;
    return this;
  }
  public getPhone(): string {
    return this.phone;
  }
  public setPhone(phone: string) {
    this.phone = phone;
    return this;
  }
  public getWebsite(): string {
    return this.website;
  }
  public setWebsite(website: string) {
    this.website = website;
    return this;
  }
  public getCompany(): Company {
    return this.company;
  }
  public setCompany(company: Company) {
    this.company = company;
    return this;
  }
}
