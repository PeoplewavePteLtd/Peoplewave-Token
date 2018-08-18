

# Interacting with the token contract

#### There are 2 types of interaction
- **Read operation** = Query = does not change the contract state
 - [Etherscan.io read tab](https://etherscan.io/token/0xbecf5bd3df959098ff71605569395787174154d9#readContract)


- **Write operation** = Modification = changes the contract state
 - [Etherscan.io write tab](https://etherscan.io/token/0xbecf5bd3df959098ff71605569395787174154d9#writeContract)


## Read examples

### Consulting an account balance
- Balance of the owner's balance --> currently is the entire supply `1,200,000,000`
![balance of owner's account](img/balance-owner.png?raw=true "balance of owner's account")

- balance of a random account --> response is `0`
![balance of random account](img/balance-random.png?raw=true "balance of random account")

## Write examples

*These operations incur a transaction fee in ETH*

### :bangbang: First step :bangbang:
You need to connect as the contract owner with Metamask
Otherwise your request will be rejected and your transaction fee in ETH will be charged for nothing.

1. #### Unlock Metamask
Afterwards ensure you are on Mainnet with the right account owning the contract
![unlock](img/mm1.png?raw=true "unlock")

- #### Connect Etherscan to Metamask
![Connect](img/mm2.png?raw=true "connect")

- #### Accept the disclaimer
![Accept](img/mm3.png?raw=true "Accept")

- #### Etherscan is now connected!
![connected](img/mm4.png?raw=true "connected")


### Distributing tokens
#### Transfer tokens to an investor
Use method `4. transfer` which deducts tokens from the owner's balance and credits them to the provided address. The total supply is unchanged.

   1. ##### Enter the parameters
   here are 1000 PPL for 0x0000b0b

![transfer](img/transfer1.png?raw=true "transfer")

   2. ##### Confirm in Metamask

![transfer](img/transfer2.png?raw=true "transfer")

   3. ##### Look for the transaction on Etherscan

   and check for the balance at the investor's address or by asking the contract as explained above

#### Transfer tokens from investor A to investor B
same as above but use method `2. transferFrom`
