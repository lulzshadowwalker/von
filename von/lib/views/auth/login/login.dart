import 'package:flutter/material.dart';
import 'package:von/helpers/von_colors.dart';
import 'package:von/helpers/von_extensions.dart';
import 'package:von/views/shared/von_email_field/von_email_field.dart';
import 'package:von/views/shared/von_password_field/von_password_field.dart';
import 'package:von/views/shared/von_rich_text_button/von_rich_text_button.dart';
import 'package:von/views/shared/von_single_child_scroll_view/von_single_child_scroll_view.dart';

class Login extends StatelessWidget {
  const Login({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: 16,
            ),
            child: VonSingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Spacer(),
                  Text(
                    context.vl.signIn,
                    style: context.textTheme.headlineMedium?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    context.vl.enterAValidEmailAndPasswordToContinue,
                    style: const TextStyle(
                      color: VonColors.muted,
                    ),
                  ),
                  const SizedBox(height: 24),
                  const VonEmailField(),
                  const SizedBox(height: 16),
                  const VonPasswordField(),
                  Align(
                    alignment: AlignmentDirectional.centerEnd,
                    child: TextButton(
                      onPressed: () {},
                      child: Text(context.vl.forgotPassword),
                    ),
                  ),
                  const SizedBox(height: 12),
                  ElevatedButton(
                    onPressed: () {},
                    child: Text(context.vl.login),
                  ),
                  const Spacer(),
                  VonRichTextButton(
                    text: context.vl.dontHaveAnAccount,
                    textCTA: context.vl.signUp,
                    onTap: () {},
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
