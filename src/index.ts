  class Usuario{
    nome : string
    saldo : number 


    constructor(n: string, s: number){
        this.nome = n
        this.saldo = s
    }
      addDinheiro(deposito:number){
        this.saldo += deposito
      }
      removeDinheiro(retirada:number){
      this.saldo -=retirada
    }
  }
  


  const user1 = new Usuario('Clenilton', 10)
  user1.addDinheiro(100)

  const user2 = new Usuario('Larissa', 199)
  user2.removeDinheiro(100)
  
  console.log(user1)
  console.log(user2)