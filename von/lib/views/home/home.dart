// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/theme/von_theme.dart';
import 'package:von/views/home/components/action_tile.dart';
import 'package:von/views/transactions/transactions.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const SizedBox(height: 42),
              const Text(
                'Welcome back,',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.w200,
                ),
              ),
              const Text(
                'lulzshadowwalker',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.w600,
                ),
              ),
              // TODO, flip counter animation for account balance
              Container(
                alignment: Alignment.center,
                margin: const EdgeInsets.only(top: 24),
                child: Column(
                  children: [
                    Text(
                      '\$1,200.49',
                      style: TextStyle(
                        fontSize: 36,
                        fontFamily: VonTheme.secondaryFontFamily,
                      ),
                    ),
                    const Text(
                      'Account Balance',
                      style: TextStyle(
                        fontSize: 12,
                        color: VonColors.muted,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(vertical: 36),
                alignment: Alignment.center,
                child: const Icon(
                  FontAwesomeIcons.qrcode,
                  size: 280,
                ),
              ),
              const ActionTile(
                color: VonColors.lightPurple,
                title: 'Add Credit',
                description: 'add credit to your account balance',
                icon: Icon(FontAwesomeIcons.creditCard),
              ),
              const SizedBox(height: 20),
              const ActionTile(
                color: VonColors.lightOrange,
                title: 'Schedule',
                description: 'today’s bus schedules',
                icon: Icon(FontAwesomeIcons.calendar),
              ),
              const SizedBox(height: 20),
              const ActionTile(
                color: VonColors.lightGreen,
                title: 'Routes',
                description: 'Bus Routes and stop points',
                icon: Icon(FontAwesomeIcons.route),
              ),
              const SizedBox(height: 20),
              ActionTile(
                onTap: () {
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (context) => const Transactions(),
                    ),
                  );
                },
                color: VonColors.lightBlue,
                title: 'Transactions',
                description: 'logs of all of your previous transactions',
                icon: Transform.rotate(
                  angle: 3 * pi / 4,
                  child: const Icon(FontAwesomeIcons.arrowRightArrowLeft),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
