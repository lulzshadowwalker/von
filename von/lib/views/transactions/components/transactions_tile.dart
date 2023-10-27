import 'package:flutter/material.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/models/transaction_type.dart';
import 'package:von/theme/von_theme.dart';

class TransactionTile extends StatelessWidget {
  const TransactionTile({
    Key? key,
    required this.title,
    required this.date,
    required this.color,
    required this.icon,
    required this.type,
    required this.amount,
    this.onTap,
  })  : isPlus = type == TransactionType.plus,
        super(key: key);

  final String title;
  final String date;
  final Color color;
  final Widget icon;
  final void Function()? onTap;
  final double amount;
  final TransactionType type;
  final bool isPlus;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Row(
        children: [
          Container(
            height: 48,
            width: 48,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50),
              color: color,
            ),
            child: icon,
          ),
          const SizedBox(width: 10),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: 18,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  date,
                  style: const TextStyle(
                    fontSize: 12,
                    color: VonColors.muted,
                  ),
                ),
              ],
            ),
          ),
          Text(
            '${isPlus ? '+' : '-'}$amount',
            style: TextStyle(
              color: isPlus ? VonColors.green : VonColors.red,
              fontSize: 18,
              fontFamily: VonTheme.secondaryFontFamily,
            ),
            // ignore: prefer_const_constructors
          ),
        ],
      ),
    );
  }
}
