import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/models/transaction_type.dart';
import 'package:von/views/shared/von_back_button/von_back_button.dart';
import 'package:von/views/transactions/components/transactions_tile.dart';

class Transactions extends StatelessWidget {
  const Transactions({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: 20,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Padding(
                padding: EdgeInsets.only(top: 36),
                child: VonBackButton(),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 36),
                child: Text(
                  context.vl.transactionsHistory,
                  style: const TextStyle(
                    fontSize: 36,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              const Text(
                'July, 9 2023',
                style: TextStyle(
                  color: VonColors.muted,
                  fontWeight: FontWeight.w600,
                  fontSize: 20,
                ),
              ),
              const SizedBox(height: 28),
              const TransactionTile(
                title: 'Online Payment',
                date: '4:59pm',
                color: VonColors.lightPurple,
                icon: Icon(FontAwesomeIcons.moneyBill),
                type: TransactionType.plus,
                amount: 32.993,
              ),
              const SizedBox(height: 20),
              const TransactionTile(
                title: 'Online Payment',
                date: '4:59pm',
                color: VonColors.lightPurple,
                icon: Icon(FontAwesomeIcons.moneyBill),
                type: TransactionType.plus,
                amount: 32.993,
              ),
              const SizedBox(height: 20),
              const TransactionTile(
                title: 'Online Payment',
                date: '4:59pm',
                color: VonColors.lightPurple,
                icon: Icon(FontAwesomeIcons.moneyBill),
                type: TransactionType.minus,
                amount: 32.993,
              ),
              const SizedBox(height: 20),
              const TransactionTile(
                title: 'Online Payment',
                date: '4:59pm',
                color: VonColors.lightPurple,
                icon: Icon(FontAwesomeIcons.moneyBill),
                type: TransactionType.plus,
                amount: 32.993,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
