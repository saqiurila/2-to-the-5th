// cerner_2^5_2018

// Input: 2->1->1, 8->3->2
// Outout: 1->0->4->3
struct ListNode *addTwoNumbers(struct ListNode *l1, struct ListNode *l2) {
    struct ListNode *sum = (struct ListNode *)malloc(sizeof(struct ListNode *));
    struct ListNode *current = sum;
    int carry = 0;

    while (l1 || l2 || carry) {
        int temp_sum = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + carry;
        carry = temp_sum / 10;

        struct ListNode *new_node = (struct ListNode *)malloc(sizeof(struct ListNode *));
        new_node->val = temp_sum % 10;
        new_node->next = NULL;

        current->next = new_node;
        current = current->next;

        l1 = l1 ? l1->next : NULL;
        l2 = l2 ? l2->next : NULL;
    }
    return sum->next;
}