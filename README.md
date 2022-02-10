
1. 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。

```
 fibonacci(0) // 0
 fibonacci(1) // 1
 fibonacci(2) // 1
 fibonacci(3) // 2
 fibonacci(4) // 3 
```

## 費氏數列 fibonacci
費氏數列 (Fibonacci numbers)，又稱費波那契數列，是指在一串數字中，每一項是前兩項的和。
費氏數列 `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]`
```
第 0 項 = 0
第 1 項 = 1
第 n 項 = 第 n-1 項 + 第 n-2 項
```
公式 `f(n) = f(n-1) + f(n-2), n >= 2`

---

2. 
使用 Linked List 實作 Stack ，實作需包含以下方法。
push() : 添加新元素。 pop():移除元素並返回被移除的元素。 size():返回所有元素數量。 

## Stack

**[Stack: Intro(簡介)](http://alrightchiu.github.io/SecondRound/stack-introjian-jie.html)**

Stack 堆疊，是一種概念性的抽象資料結構，可分別使用 Array (陣列)、Linked list (連結串列) 來實作。

### 概念

具有「LIFO, Last-In-Fast-Out」的資料結構（可以想像成一種裝資料的容器），最晚進 stack 的資料會最先被取出，最早進則最晚出。

所以只要符合 LIFO 的資料結構，都可以稱為 stack。

### 方法

- `push` 把資料放進 stack
- `pop` 把最上面的資料從 stack 中移除
- `top` 回傳最上面的資料，不影響資料結構本身
- `isEmpty` 確認 stack 裡面是否有資料，不影響資料結構本身
- `getSize` 回傳 stack 裡的資料個數，不影響資料結構本身

### 特徵

除了最上面的資料可以用 `top()` 讀取，其他都無法得知，只能靠 `pop()` 把資料一個一個拿出來檢查。

### 應用

因為 stack 特性，可以處理需要「回復先前狀態」的問題，一般稱 Back-Tracking 問題，像是：

- undo 功能
- 回到前一頁功能
- compiler’s Parsing
- 改寫遞迴
- memory management’s Call Stack

### 以 Array & Linked List 實作

**[Linked List: Intro(簡介)](http://alrightchiu.github.io/SecondRound/linked-list-introjian-jie.html)**

Linked List 是常見的資料結構，使用 node 記錄、表示、儲存 data，並利用每個 node 中的 pointer 指向下一個 node，藉此將多個 node 串連起來形成 Linked List，並以 NULL 代表 Linked List 終點。
![](https://i.imgur.com/BXtMzjl.png)

---

3. 將下列輸入資料整合成期望的輸出結果。

輸入資料
```
const userIds = [‘U01’, ‘U02’, ‘U03’] 
const orderIds = [‘T01’, ‘T02’, ‘T03, ‘T04’] 
const userOrders = [			
{ userId: ‘U01’, orderIds: [‘T01’, ‘T02’] },
 	{ userId: ‘U02’, orderIds: [] },
 	{ userId: ‘U03’, orderIds: [‘T03’] },
]
const userData = { ‘U01’: ‘Tom’, ‘U02’: ‘Sam’, ‘U03’: ‘John’ } 
const orderData = {						
‘T01’: { name: ‘A’, price: 499 }, 
‘T02’: { name: ‘B’, price: 599 },
‘T03’: { name: ‘C’, price: 699 }, 
‘T04’: { name: ‘D’, price: 799 }
} 
```

輸出結果
```
const result = [ 
{
	user: { id: ‘U01’, name: ‘Tom’ }, 
orders: [
{ id: ‘T01’, name: ‘A’, price: 499 },
{ id: ‘T02’, name: ‘B’, price: 599 }, 
],
},
…,
]
```

